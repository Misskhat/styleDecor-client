// src/pages/Payment/CheckoutForm.jsx

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utility/axiosInstance";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // booking data from navigate state
  const bookingData = location.state;

  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [cardError, setCardError] = useState("");

  // amount from booking
  const amount = bookingData?.cost || 100;

  // create payment intent
  useEffect(() => {
    if (amount > 0) {
      axiosInstance
        .post("/api/payments/create-payment-intent", {
          amount,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setCardError("");

    const card = elements.getElement(CardElement);

    if (!card) return;

    // create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      setLoading(false);
      return;
    }

    // confirm payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user?.displayName || "Anonymous",
          email: user?.email || "Unknown",
        },
      },
    });

    if (result.error) {
      setCardError(result.error.message);
      setLoading(false);
      return;
    }

    // payment success
    if (result.paymentIntent.status === "succeeded") {
      const paymentInfo = {
        userEmail: user?.email,
        amount,
        transactionId: result.paymentIntent.id,
        bookingId: bookingData?._id,
        paymentMethod: result.paymentIntent.payment_method_types[0],
        date: new Date(),
      };

      try {
        // save payment history
        await axiosInstance.post("/api/payments/make-payment", paymentInfo);

        // update booking payment status
        await axiosInstance.patch(
          `/api/booking/my-booking-data/${bookingData?._id}`,
          {
            isPaid: true,
            transactionId: result.paymentIntent.id,
          },
        );

        toast.success("Payment successful");

        navigate("/dashboard/my-payments");
      } catch (err) {
        console.log(err);
        toast.error("Payment saved failed");
      }
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Complete Your Payment</h1>

        <p className="text-base-content/70">
          Securely pay for your booked interior service using Stripe payment
          gateway.
        </p>
      </div>

      {/* Payment Card */}
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body p-8">
          {/* Booking Info */}
          <div className="bg-base-200 rounded-2xl p-5 mb-8">
            <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>

            <div className="space-y-2">
              <p>
                <span className="font-semibold">Service:</span>{" "}
                {bookingData?.serviceName}
              </p>

              <p>
                <span className="font-semibold">Location:</span>{" "}
                {bookingData?.location}
              </p>

              <p>
                <span className="font-semibold">Booking Date:</span>{" "}
                {new Date(bookingData?.bookingDate).toLocaleDateString()}
              </p>

              <p className="text-lg font-bold mt-4">Total Amount: ${amount}</p>
            </div>
          </div>

          {/* Stripe Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border border-base-300 rounded-xl p-5">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                    },
                  },
                }}
              />
            </div>

            {cardError && <p className="text-red-500 text-sm">{cardError}</p>}

            <button
              type="submit"
              disabled={!stripe || !clientSecret || loading}
              className="btn btn-primary w-full"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                `Pay $${amount}`
              )}
            </button>
          </form>

          {/* Test Card */}
          <div className="mt-8 alert alert-info">
            <span>
              Test Card: 4242 4242 4242 4242 | Any future date | Any CVC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

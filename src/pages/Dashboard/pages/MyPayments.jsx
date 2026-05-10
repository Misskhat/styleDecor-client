import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../utility/axiosInstance";

const MyPayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/api/payments/my-payments")
      .then((res) => {
        setPayments(res.data.payments);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">My Payments</h1>

        <p className="text-base-content/70 mt-2">
          View all your completed payment history and transaction details.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 rounded-2xl shadow border border-base-200">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Amount</th>
              <th>Transaction ID</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {payments?.length > 0 ? (
              payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>

                  <td>
                    <span className="font-semibold">${payment.amount}</span>
                  </td>

                  <td>
                    <span className="text-sm break-all">
                      {payment.transactionId}
                    </span>
                  </td>

                  <td>{new Date(payment.date).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-10">
                  <div className="flex flex-col items-center gap-3">
                    <h2 className="text-xl font-semibold">
                      No Payment History Found
                    </h2>

                    <p className="text-base-content/60">
                      Your completed payments will appear here.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPayments;

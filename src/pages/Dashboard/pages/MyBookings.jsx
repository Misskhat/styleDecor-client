import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { axiosInstance } from "../../../utility/axiosInstance";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Booking Data
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);

      const res = await axiosInstance.get("/api/booking/my-booking-data");

      setBookings(res.data.bookingData);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  // Cancel Booking
  const handleCancelBooking = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this booking?",
    );

    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`/api/booking/my-booking-data/${id}`);

      toast.success("Booking cancelled successfully");

      const remainingBookings = bookings.filter(
        (booking) => booking._id !== id,
      );

      setBookings(remainingBookings);
    } catch (error) {
      console.log(error);
      toast.error("Failed to cancel booking");
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">My Bookings</h1>

        <p className="text-base-content/70 mt-2">
          View and manage all your interior service bookings from here.
        </p>
      </div>

      {/* Empty State */}
      {bookings.length === 0 ? (
        <div className="hero bg-base-200 rounded-3xl py-20">
          <div className="hero-content text-center">
            <div>
              <h2 className="text-3xl font-bold mb-3">No Bookings Found</h2>

              <p className="text-base-content/70">
                You have not booked any services yet.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto bg-base-100 rounded-3xl shadow border border-base-200">
          <table className="table">
            {/* Table Head */}
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Service Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id}>
                  <td>{index + 1}</td>

                  <td>
                    <div className="font-semibold">{booking?.serviceName}</div>
                  </td>

                  <td>{new Date(booking?.bookingDate).toLocaleDateString()}</td>

                  <td>{booking?.location}</td>

                  <td>
                    <span
                      className={`badge capitalize ${
                        booking?.status === "assigned"
                          ? "badge-warning"
                          : booking?.status === "completed"
                            ? "badge-success"
                            : "badge-info"
                      }`}
                    >
                      {booking?.status || "assigned"}
                    </span>
                  </td>

                  <td>
                    {booking?.isPaid ? (
                      <span className="badge badge-success">Paid</span>
                    ) : (
                      <span className="badge badge-error">Unpaid</span>
                    )}
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="flex flex-wrap gap-2">
                      {/* Pay Button */}
                      {!booking?.isPaid && (
                        <button className="btn btn-sm btn-primary">Pay</button>
                      )}

                      {/* Cancel Button */}
                      <button
                        onClick={() => handleCancelBooking(booking._id)}
                        className="btn btn-sm btn-error btn-outline"
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;

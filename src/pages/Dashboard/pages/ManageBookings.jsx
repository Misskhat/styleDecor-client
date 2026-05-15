import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../../../utility/axiosInstance";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Bookings
  const fetchBookings = async () => {
    try {
      const res = await axiosInstance.get("/api/booking/booking-data");

      setBookings(res.data.bookingData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Assign Decorator
  const handleAssignDecorator = async (booking) => {
    // Temporary
    toast.info(`Assign decorator feature for ${booking.serviceName}`);

    // Future API
    // PATCH /api/booking/assign/:id
  };

  // Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Manage Bookings</h1>

        <p className="text-base-content/70 mt-2">
          View all customer bookings and assign decorators after successful
          payment.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 rounded-2xl shadow border border-base-200">
        <table className="table">
          {/* Table Head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>User Email</th>
              <th>Service</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
              <th>isPaid</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {bookings?.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={booking._id}>
                  {/* Index */}
                  <th>{index + 1}</th>

                  {/* Email */}
                  <td>
                    <p className="text-sm break-all">{booking?.userEmail}</p>
                  </td>

                  {/* Service */}
                  <td>
                    <h3 className="font-semibold">{booking?.serviceName}</h3>
                  </td>

                  {/* Date */}
                  <td>{booking?.bookingDate || "Not Provided"}</td>

                  {/* Location */}
                  <td>{booking?.location || "Not Provided"}</td>

                  {/* Status */}
                  <td>
                    <span className="badge badge-outline capitalize">
                      {booking?.status || "Pending"}
                    </span>
                  </td>

                  {/* isPaid */}
                  <td>
                    {booking?.isPaid ? (
                      <span className="badge badge-success">Paid</span>
                    ) : (
                      <span className="badge badge-warning">Unpaid</span>
                    )}
                  </td>

                  {/* Action */}
                  <td>
                    {booking?.isPaid ? (
                      <button
                        onClick={() => handleAssignDecorator(booking)}
                        className="btn btn-primary btn-sm"
                      >
                        Assign Decorator
                      </button>
                    ) : (
                      <span className="badge badge-error">
                        Awaiting Payment
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-10">
                  <div className="flex flex-col items-center gap-3">
                    <h2 className="text-xl font-semibold">No Bookings Found</h2>

                    <p className="text-base-content/60">
                      Customer booking data will appear here.
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

export default ManageBookings;

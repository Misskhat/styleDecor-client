import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { axiosInstance } from "../../../utility/axiosInstance";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Users
  useEffect(() => {
    axiosInstance
      .get("/api/users/all-user")
      .then((res) => {
        setUsers(res.data.allUsers);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Make Decorator
  const handleMakeDecorator = async (id) => {
    try {
      const updatedRole = {
        role: "decorator",
      };

      const res = await axiosInstance.patch(
        `/api/users/update-user/${id}`,
        updatedRole,
      );

      if (res.data.user) {
        toast.success("User promoted to decorator");

        // Update UI instantly
        const updatedUsers = users.map((user) =>
          user._id === id ? { ...user, role: "decorator" } : user,
        );

        setUsers(updatedUsers);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update role");
    }
  };

  // Loading Spinner
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
        <h1 className="text-3xl md:text-4xl font-bold">Manage Users</h1>

        <p className="text-base-content/70 mt-2">
          Manage all registered users and assign decorator roles.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 rounded-2xl shadow border border-base-200">
        <table className="table">
          {/* Table Head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users?.length > 0 ? (
              users.map((user, index) => (
                <tr key={user._id}>
                  {/* Index */}
                  <th>{index + 1}</th>

                  {/* Photo */}
                  <td>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          src={
                            user?.photoURL ||
                            "https://i.ibb.co/4pDNDk1/avatar.png"
                          }
                          alt="user"
                        />
                      </div>
                    </div>
                  </td>

                  {/* Name */}
                  <td>
                    <h3 className="font-semibold">
                      {user?.displayName || "No Name"}
                    </h3>
                  </td>

                  {/* Email */}
                  <td>
                    <p className="text-sm break-all">{user?.email}</p>
                  </td>

                  {/* Role */}
                  <td>
                    <span className="badge badge-outline capitalize">
                      {user?.role || "user"}
                    </span>
                  </td>

                  {/* Action */}
                  <td>
                    {user?.role === "user" && (
                      <button
                        onClick={() => handleMakeDecorator(user._id)}
                        className="btn btn-primary btn-sm"
                      >
                        Make Decorator
                      </button>
                    )}

                    {user?.role === "decorator" && (
                      <span className="badge badge-success">Decorator</span>
                    )}

                    {user?.role === "admin" && (
                      <span className="badge badge-error">Admin</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-10">
                  <div className="flex flex-col items-center gap-3">
                    <h2 className="text-xl font-semibold">No Users Found</h2>

                    <p className="text-base-content/60">
                      Registered users will appear here.
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

export default ManageUsers;

import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useRole } from "../../../hooks/useRole";

const Profile = () => {
  const { user } = useAuth();
  const { role } = useRole();
  return (
    <div className="max-w-5xl mx-auto">
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">My Profile</h1>

        <p className="text-base-content/70 mt-2">
          Manage and view your account information from your dashboard profile.
        </p>
      </div>

      {/* Profile Card */}
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div>
              <div className="avatar">
                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"
                    }
                    alt="Profile"
                  />
                </div>
              </div>
            </div>

            {/* Profile Information */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Display Name */}
                <div className="bg-base-200 rounded-2xl p-5">
                  <p className="text-sm text-base-content/60 mb-1">
                    Display Name
                  </p>

                  <h3 className="text-xl font-semibold">
                    {user?.displayName || "No Name Found"}
                  </h3>
                </div>

                {/* Email */}
                <div className="bg-base-200 rounded-2xl p-5">
                  <p className="text-sm text-base-content/60 mb-1">
                    Email Address
                  </p>

                  <h3 className="text-xl font-semibold break-all">
                    {user?.email}
                  </h3>
                </div>

                {/* Role */}
                <div className="bg-base-200 rounded-2xl p-5 md:col-span-2">
                  <p className="text-sm text-base-content/60 mb-1">
                    Account Role
                  </p>

                  <div className="mt-2">
                    <span className="badge badge-primary badge-lg capitalize">
                      {role || "User"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Extra Info */}
              <div className="mt-6 alert alert-info">
                <span>
                  Welcome back! You can manage your bookings, services, and
                  dashboard activities from this panel.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

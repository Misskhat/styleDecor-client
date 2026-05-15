import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { axiosInstance } from "../../../utility/axiosInstance";

const AssignedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Assigned Projects
  const fetchProjects = async () => {
    try {
      const res = await axiosInstance.get("/api/booking/booking-data");

      // Future:
      // Filter by assigned decorator

      setProjects(res.data.bookingData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

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
        <h1 className="text-3xl md:text-4xl font-bold">Assigned Projects</h1>

        <p className="text-base-content/70 mt-2">
          View all assigned interior and decoration projects and manage their
          working progress.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 rounded-2xl shadow border border-base-200">
        <table className="table">
          {/* Table Head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Service</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {projects?.length > 0 ? (
              projects.map((project, index) => (
                <tr key={project._id}>
                  {/* Index */}
                  <th>{index + 1}</th>

                  {/* Service */}
                  <td>
                    <h3 className="font-semibold">{project?.serviceName}</h3>
                  </td>

                  {/* Date */}
                  <td>
                    {new Date(project?.bookingDate).toLocaleDateString() ||
                      "Not Provided"}
                  </td>

                  {/* Location */}
                  <td>{project?.location || "Not Provided"}</td>

                  {/* Status */}
                  <td>
                    <span className="badge badge-outline capitalize">
                      {project?.status || "Pending"}
                    </span>
                  </td>

                  {/* Action */}
                  <td>
                    <Link
                      to="/dashboard/update-status"
                      className="btn btn-primary btn-sm"
                    >
                      Update Status
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-10">
                  <div className="flex flex-col items-center gap-3">
                    <h2 className="text-xl font-semibold">
                      No Assigned Projects
                    </h2>

                    <p className="text-base-content/60">
                      Assigned decorator projects will appear here.
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

export default AssignedProjects;

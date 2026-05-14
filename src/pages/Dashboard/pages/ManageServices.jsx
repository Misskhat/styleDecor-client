import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { axiosInstance } from "../../../utility/axiosInstance";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch Services
  const fetchServices = async () => {
    try {
      const res = await axiosInstance.get("/api/services");

      setServices(res.data.services);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Add Service
  const handleAddService = async (data) => {
    try {
      const serviceData = {
        ...data,
        cost: parseFloat(data.cost),
      };

      const res = await axiosInstance.post("/api/services", serviceData);

      if (res.data.insertedId) {
        toast.success("Service added successfully");

        document.getElementById("add_service_modal").close();

        reset();

        fetchServices();
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add service");
    }
  };

  // Delete Service
  const handleDeleteService = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this service?",
    );

    if (!confirmDelete) return;

    try {
      const res = await axiosInstance.delete(`/api/services/${id}`);

      if (res.data.deletedCount > 0) {
        toast.success("Service deleted successfully");

        const remainingServices = services.filter(
          (service) => service._id !== id,
        );

        setServices(remainingServices);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete service");
    }
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Manage Services</h1>

          <p className="text-base-content/70 mt-2">
            Add, manage, and remove all available services.
          </p>
        </div>

        <button
          onClick={() =>
            document.getElementById("add_service_modal").showModal()
          }
          className="btn btn-primary"
        >
          Add Service
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 rounded-2xl shadow border border-base-200">
        <table className="table">
          {/* Table Head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {services?.length > 0 ? (
              services.map((service, index) => (
                <tr key={service._id}>
                  {/* Index */}
                  <th>{index + 1}</th>

                  {/* Image */}
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-xl">
                        <img src={service?.image} alt={service?.service_name} />
                      </div>
                    </div>
                  </td>

                  {/* Name */}
                  <td>
                    <h3 className="font-semibold">{service?.service_name}</h3>
                  </td>

                  {/* Category */}
                  <td>
                    <span className="badge badge-outline">
                      {service?.service_category}
                    </span>
                  </td>

                  {/* Cost */}
                  <td>
                    <span className="font-semibold">
                      ${service?.cost} / {service?.unit}
                    </span>
                  </td>

                  {/* Action */}
                  <td>
                    <button
                      onClick={() => handleDeleteService(service._id)}
                      className="btn btn-error btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-10">
                  <div className="flex flex-col items-center gap-3">
                    <h2 className="text-xl font-semibold">No Services Found</h2>

                    <p className="text-base-content/60">
                      Added services will appear here.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <dialog id="add_service_modal" className="modal">
        <div className="modal-box max-w-3xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-2xl">Add New Service</h3>

            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost">✕</button>
            </form>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleAddService)} className="space-y-5">
            {/* Service Name */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Service Name</span>
              </label>

              <input
                type="text"
                placeholder="Enter service name"
                className="input input-bordered w-full"
                {...register("service_name", {
                  required: "Service name is required",
                })}
              />

              {errors.service_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.service_name.message}
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Service Category</span>
              </label>

              <input
                type="text"
                placeholder="Enter service category"
                className="input input-bordered w-full"
                {...register("service_category", {
                  required: "Category is required",
                })}
              />

              {errors.service_category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.service_category.message}
                </p>
              )}
            </div>

            {/* Cost + Unit */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Cost */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Service Cost</span>
                </label>

                <input
                  type="number"
                  placeholder="Enter service cost"
                  className="input input-bordered w-full"
                  {...register("cost", {
                    required: "Cost is required",
                  })}
                />

                {errors.cost && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cost.message}
                  </p>
                )}
              </div>

              {/* Unit */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Service Unit</span>
                </label>

                <input
                  type="text"
                  placeholder="Example: per room"
                  className="input input-bordered w-full"
                  {...register("unit", {
                    required: "Unit is required",
                  })}
                />

                {errors.unit && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.unit.message}
                  </p>
                )}
              </div>
            </div>

            {/* Image */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Image URL</span>
              </label>

              <input
                type="text"
                placeholder="Paste image URL"
                className="input input-bordered w-full"
                {...register("image", {
                  required: "Image URL is required",
                })}
              />

              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Description</span>
              </label>

              <textarea
                className="textarea textarea-bordered h-32 w-full"
                placeholder="Write service description"
                {...register("description", {
                  required: "Description is required",
                })}
              ></textarea>

              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full mt-4">Add Service</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ManageServices;

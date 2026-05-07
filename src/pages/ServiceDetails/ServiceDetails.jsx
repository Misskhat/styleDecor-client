import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { axiosInstance } from "../../utility/axiosInstance";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setServices] = useState({});

  useEffect(() => {
    axiosInstance.get("/api/services").then((res) => {
      const allServices = res.data.services;
      const findService = allServices.find((service) => service._id == id);
      setServices(findService);
    });
  }, [id]);

  const { image, service_name, service_category, cost, unit, details } =
    service;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        {/* Image Section */}
        <div>
          <img
            src={image}
            alt={service_name}
            className="w-full h-[500px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition duration-500"
          />
        </div>
        {/* Content Section */}
        <div>
          <div className="badge badge-primary badge-outline mb-4">
            {service_category}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {service_name}
          </h1>

          <p className="text-base-content/70 leading-8 text-lg mb-8">
            {details}
          </p>

          {/* Price Card */}
          <div className="bg-base-200 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-2">Service Cost</h3>

            <p className="text-3xl font-bold">
              ${cost}
              <span className="text-lg font-medium text-base-content/60 ml-2">
                / {unit}
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to={"/service-booking"}>
              <button className="flex flex-1 gap-2 items-center justify-center my-5 bg-linear-to-r from-[#090979] to-[#00D4FF] btn text-white">
                Book Service
                <FaArrowRightLong />
              </button>
            </Link>

            <Link to={"/contact"}>
              <button className="flex gap-2 items-center justify-center my-5 bg-linear-to-r from-[#090979] to-[#00D4FF] btn text-white">
                Contact Us
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

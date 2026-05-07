import React from "react";
import { Link } from "react-router";

const ServiceCardDesign = ({ service }) => {
  const { _id, service_name, service_category, image } = service;
  return (
    <div>
      <div
        key={_id}
        className="card bg-base-100 shadow-sm hover:shadow-xl transition duration-300 border border-base-200"
      >
        <figure className="h-60 overflow-hidden">
          <img
            src={image}
            alt={service_name}
            className="w-[600px] h-64 object-cover hover:scale-105 transition duration-500"
          />
        </figure>

        <div className="card-body">
          <div>
            <span className="badge badge-outline badge-primary mb-3">
              {service_category}
            </span>

            <h2 className="card-title text-2xl font-bold">{service_name}</h2>
          </div>

          <div className="card-actions mt-6">
            <Link
              to={`/service/${_id}`}
              className="btn btn-neutral border-none btn-sm w-full bg-linear-to-r from-[#090979] to-[#00D4FF] text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardDesign;

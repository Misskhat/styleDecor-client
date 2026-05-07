import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { axiosInstance } from "../../../utility/axiosInstance";
import ServiceCardDesign from "./ServiceCardDesign";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/api/services/")
      .then((res) => {
        setServices(res.data.services);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="pb-10">
        <h2 className="text-3xl font-semibold my-5 text-[#090979] text-center">
          Home & Office Interior Design Services We Offer
        </h2>
        <p className="text-center w-5xl mx-auto">
          Interior Concepts & Design Limited is one of the fast-growing and
          promising interior design service providers in Bangladesh. We started
          our formal operation in 2008 as a complete interior decorators and
          furniture supplier.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCardDesign
            key={service._id}
            service={service}
          ></ServiceCardDesign>
        ))}
      </div>
    </div>
  );
};

export default Services;

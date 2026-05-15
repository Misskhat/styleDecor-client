import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../utility/axiosInstance";
import ServiceCardDesign from "./ServiceCardDesign";

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

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

  // Filter Services
  const filteredServices = services.filter((service) => {
    const matchSearch = service.service_name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "" ||
      service.service_category.toLowerCase() === category.toLowerCase();

    return matchSearch && matchCategory;
  });

  return (
    <div className="w-11/12 mx-auto my-10">
      {/* Heading */}
      <div className="pb-10">
        <h2 className="text-3xl font-semibold my-5 text-[#090979] text-center">
          Home & Office Interior Design Services We Offer
        </h2>

        <p className="text-center max-w-4xl mx-auto">
          Interior Concepts & Design Limited is one of the fast-growing and
          promising interior design service providers in Bangladesh.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search service..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="select select-bordered w-full md:w-72"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Living Room">Living Room</option>
          <option value="Office">Office</option>
          <option value="Lighting">Lighting</option>
          <option value="Furniture">Furniture</option>
          <option value="Bedroom">Bedroom</option>
        </select>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCardDesign key={service._id} service={service} />
        ))}
      </div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold mb-3">No Services Found</h3>

          <p className="text-base-content/70">
            Try searching with another keyword or category.
          </p>
        </div>
      )}
    </div>
  );
};

export default Services;

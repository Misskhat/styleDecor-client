import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { motion } from "framer-motion";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div className="relative">
          <img
            className="h-[70vh] w-full object-cover"
            src={"https://i.ibb.co.com/Z1YXRDCc/banner1.jpg"}
          />
          <Link
            to={"/contact"}
            className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white border-none"
          >
            Contact Our Interior Designer
          </Link>
        </div>
        <div>
          <img
            className="h-[70vh] w-full object-cover"
            src={"https://i.ibb.co.com/hRXLy0nt/banner2.jpg"}
          />
          <Link
            to={"/contact"}
            className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white border-none"
          >
            Contact Our Interior Designer
          </Link>
        </div>
        <div>
          <img
            className="h-[70vh] w-full object-cover"
            src={"https://i.ibb.co.com/69VpT42/banner3.webp"}
          />

          <Link
            to={"/contact"}
            className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white border-none"
          >
            Contact Our Interior Designer
          </Link>
        </div>
        <div>
          <img
            className="h-[70vh] w-full object-cover"
            src={"https://i.ibb.co.com/rGRxC360/banner4.jpg"}
          />
          <Link
            to={"/contact"}
            className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white border-none"
          >
            Contact Our Interior Designer
          </Link>
        </div>
        <div>
          <img
            className="h-[70vh] w-full object-cover"
            src={"https://i.ibb.co.com/ycgK9D3X/banner5.avif"}
          />
          <Link
            to={"/contact"}
            className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white border-none"
          >
            Contact Our Interior Designer
          </Link>
        </div>
      </Carousel>
      {/* <div className="my-10 mx-auto w-3/4 text-center">
        <h2 className="my-5 text-3xl font-semibold text-[#090979]">
          Top-notch Interior Design Firm in Dhaka, Bangladesh
        </h2>
        <p className="border-l-4 border-[#00D4FF] p-2 bg-gray-100 rounded">
          {" "}
          Interior Concepts & Design Limited is one of the top and most
          competitive interior design companies in Bangladesh. We have a desire
          to decorate the details in a way that clearly communicates what is
          most important to us as a family. The projects covered by very
          talented interior designers involved in the specification, arranging
          products and consistently completing excellent projects in
          Bangladesh.{" "}
        </p>
      </div> */}
      <div className="my-10 mx-auto w-3/4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="my-5 text-3xl font-semibold text-[#090979]"
        >
          Top-notch Interior Design Firm in Dhaka, Bangladesh
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-l-4 border-[#00D4FF] p-2 bg-gray-100 rounded"
        >
          Interior Concepts & Design Limited is one of the top and most
          competitive interior design companies in Bangladesh. We have a desire
          to decorate the details in a way that clearly communicates what is
          most important to us as a family.
        </motion.p>

        <Link to={"/services"}>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 btn bg-linear-to-r from-[#090979] to-[#00D4FF] text-white border-none"
          >
            Book Decoration Service
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;

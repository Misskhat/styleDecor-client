import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-dvh bg-amber-400 flex flex-col items-center justify-center gap-5">
      <div className="text-white text-center space-y-5 animate-bounce">
        <h1 className="text-8xl font-bold">Opps...!!</h1>
        <p className="text-5xl font-semibold text-[#00d5ff9d]">
          404 Page Not Found
        </p>
      </div>
      <NavLink
        to={"/"}
        className="flex gap-2 items-center justify-center my-5 bg-linear-to-r from-[#090979] to-[#00D4FF] btn text-white text-2xl"
      >
        GO HOME
        <FaArrowRightLong />
      </NavLink>
    </div>
  );
};

export default ErrorPage;

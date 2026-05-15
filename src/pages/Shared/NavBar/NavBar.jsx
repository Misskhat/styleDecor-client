import React from "react";
import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, signOutUser } = useAuth();

  const handleSignOut = () => {
    signOutUser()
      .then()
      .catch((error) => console.log(error));
    toast.warning("You are successfully log out. See you again!");
  };

  const links = (
    <div>
      <NavLink to={"/"} className={"px-4"}>
        Home
      </NavLink>
      <NavLink to={"/services"} className={"px-4"}>
        Services
      </NavLink>
      {/* <NavLink to={`/service-booking/:id`} className={"px-4"}>
        Service Booking
      </NavLink> */}
      <NavLink to={"/about"} className={"px-4"}>
        About
      </NavLink>
      <NavLink to={"/contact"} className={"px-4"}>
        Contact
      </NavLink>
    </div>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"}>
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link onClick={handleSignOut} className="btn bg-[#00D4FF]">
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"} className="btn bg-[#00D4FF]">
              Login
            </Link>
          )}
          <button className="btn bg-[#00D4FF]">
            <Link to={"/dashboard"}>Dashboard</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

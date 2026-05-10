import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { useRole } from "../hooks/useRole";
import useAuth from "../hooks/useAuth";

const DashBoardLayout = () => {
  const { role, roleLoading } = useRole();
  const { signOut } = useAuth();

  if (roleLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="navbar bg-base-100 border-b border-base-200 px-4">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold">StyleDecor Dashboard</h2>
          </div>

          <div>
            <Link to="/" className="btn btn-neutral btn-sm">
              Back To Website
            </Link>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <aside className="min-h-full w-72 bg-base-200 p-5">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Shell Decor</h1>

            <p className="text-sm text-base-content/60 mt-1">
              Interior Dashboard Panel
            </p>
          </div>

          {/* Menu */}
          <ul className="menu space-y-2">
            {/* Profile */}
            <li>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  isActive ? "bg-neutral text-white" : ""
                }
              >
                Profile
              </NavLink>
            </li>

            {/* USER ROUTES */}
            {role === "user" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/my-bookings"
                    className={({ isActive }) =>
                      isActive ? "bg-neutral text-white" : ""
                    }
                  >
                    My Bookings
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/my-payments"
                    className={({ isActive }) =>
                      isActive ? "bg-neutral text-white" : ""
                    }
                  >
                    My Payments
                  </NavLink>
                </li>
              </>
            )}

            {/* ADMIN ROUTES */}
            {role === "admin" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/manage-services"
                    className={({ isActive }) =>
                      isActive ? "bg-neutral text-white" : ""
                    }
                  >
                    Manage Services
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/manage-users"
                    className={({ isActive }) =>
                      isActive ? "bg-neutral text-white" : ""
                    }
                  >
                    Manage Users
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/manage-bookings"
                    className={({ isActive }) =>
                      isActive ? "bg-neutral text-white" : ""
                    }
                  >
                    Manage Bookings
                  </NavLink>
                </li>
              </>
            )}

            {/* DECORATOR ROUTES */}
            {role === "decorator" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/assigned-projects"
                    className={({ isActive }) =>
                      isActive ? "bg-neutral text-white" : ""
                    }
                  >
                    Assigned Projects
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/update-status"
                    className={({ isActive }) =>
                      isActive ? "bg-neutral text-white" : ""
                    }
                  >
                    Update Status
                  </NavLink>
                </li>
              </>
            )}

            {/* Divider */}
            <div className="divider"></div>

            {/* Website Home */}
            <li>
              <NavLink to="/">Home Page</NavLink>
            </li>

            <li>
              <button onClick={signOut}>Logout</button>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashBoardLayout;

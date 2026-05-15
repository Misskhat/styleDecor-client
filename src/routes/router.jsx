import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AuthLayout from "../layouts/AuthLayout";
import ContactUs from "../pages/ContactUs/ContactUs";
import PrivateRouter from "./PrivateRouter";
import ServiceBooking from "../pages/ServiceBooking/ServiceBooking";
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Services from "../pages/Home/Services/Services";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashBoardLayout from "../layouts/DashBoardLayout";
import Profile from "../pages/Dashboard/pages/Profile";
import MyBookings from "../pages/Dashboard/pages/MyBookings";
import MyPayments from "../pages/Dashboard/pages/MyPayments";
import ManageServices from "../pages/Dashboard/pages/ManageServices";
import ManageUsers from "../pages/Dashboard/pages/ManageUsers";
import ManageBookings from "../pages/Dashboard/pages/ManageBookings";
import AssignedProjects from "../pages/Dashboard/pages/AssignedProjects";
import Payment from "../pages/payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "services/:id",
        element: (
          <PrivateRouter>
            <ServiceDetails></ServiceDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "contact",
        Component: ContactUs,
      },
      {
        path: "about",
        Component: AboutUs,
      },
      {
        path: "service-booking/:id",
        Component: ServiceBooking,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "registration",
        Component: Registration,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "my-bookings",
        Component: MyBookings,
      },
      {
        path: "my-payments",
        Component: MyPayments,
      },
      {
        path: "manage-services",
        Component: ManageServices,
      },
      {
        path: "manage-users",
        Component: ManageUsers,
      },
      {
        path: "manage-bookings",
        Component: ManageBookings,
      },
      {
        path: "assigned-projects",
        Component: AssignedProjects,
      },
      {
        path: "payment",
        element: (
          <PrivateRouter>
            <Payment></Payment>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

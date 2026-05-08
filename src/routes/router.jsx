import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AuthLayout from "../layouts/AuthLayout";
import ContactUs from "../pages/ContactUs/ContactUs";
import PrivateRouter from "./PrivateRouter";
import Decorator from "../pages/Decorator/Decorator";
import ServiceBooking from "../pages/ServiceBooking/ServiceBooking";
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Services from "../pages/Home/Services/Services";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

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
        Component: ServiceDetails,
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
        path: "decorator",
        element: (
          <PrivateRouter>
            {" "}
            <Decorator></Decorator>
          </PrivateRouter>
        ),
      },
      {
        path: "service-booking/:id",
        element: (
          <PrivateRouter>
            {" "}
            <ServiceBooking></ServiceBooking>
          </PrivateRouter>
        ),
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
    path: "/*",
    Component: ErrorPage,
  },
]);

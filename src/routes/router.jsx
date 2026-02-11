import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AboutUs from "../pages/AboutUs/AboutUs";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/about',
                Component: AboutUs
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/registration',
                Component: Registration
            }
        ]
    },
]);
// src/router/index.tsx
import { createHashRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Partners from "../pages/Partners";
import TryOn from "../pages/TryOn";
import Info from "../pages/Info";
import About from "../pages/About";
import Shopping from "../pages/Shopping";
import Privacy from "../pages/Privacy";
import Contact from "../pages/Contact";
import ExampleProfile from "../pages/Profile/ExampleProfile";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />, // this includes your Navbar
    children: [
      {
        index: true, // This makes it the default route
        element: <Home />,
      },
      {
        path: "partners",
        element: <Partners />,
      },
      {
        path: "tryon",
        element: <TryOn />,
      },
      {
        path: "info",
        element: <Info />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shopping",
        element: <Shopping />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "profile",
        element: <ExampleProfile />,
      },
    ],
  },
]);
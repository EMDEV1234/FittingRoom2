// src/router/index.tsx
import { createHashRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
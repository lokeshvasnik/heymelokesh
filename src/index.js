import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Project from "./pages/Project";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import "./App.css";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

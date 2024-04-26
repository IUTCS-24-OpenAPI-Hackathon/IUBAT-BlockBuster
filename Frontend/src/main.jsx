import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppContextProvider } from "../contexts/appContext.jsx";
import App from "./App.jsx";
import "./index.css";
import About from "./Pages/About.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
import NearByPlaces from "./Pages/NearByPlaces.jsx";
import Placedetails from "./Pages/Placedetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/nearbyPlaces",
        element: <NearByPlaces></NearByPlaces>,
      },
      {
        path: "/nearbyPlaces/:id",
        element: <Placedetails></Placedetails>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);

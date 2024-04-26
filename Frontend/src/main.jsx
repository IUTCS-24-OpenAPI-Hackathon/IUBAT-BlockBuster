import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import MapComponent from "./Components/Map/MapComponent.jsx";
import RestaurantsNearby from "./Components/Map/RestaurantsNearby.jsx";
import "./index.css";
import Home from "./Pages/Home.jsx";
import HospitalsNearby from "./Components/Map/HospitalsNearby.jsx";
import PlacesNearby from "./Components/Map/PlacesNearby.jsx";

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
        path: "/Map", // Add a route for the MapComponent
        element: <MapComponent></MapComponent>,
      },
      {
        path: "/restaurants", // Add a route for the restaurant
        element: <RestaurantsNearby></RestaurantsNearby>,
      },
      {
        path: "/hospitals", // Add a route for the restaurant
        element: <HospitalsNearby></HospitalsNearby>,
      },
      {
        path: "/places", // Add a route for the restaurant
        element: <PlacesNearby></PlacesNearby>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

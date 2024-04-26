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
import UserContext from "./providers/UserContext.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },

      {
        path: "/nearbyPlaces",
        element: (
          <PrivateRoute>
            <NearByPlaces></NearByPlaces>
          </PrivateRoute>
        ),
      },
      {
        path: "/nearbyPlaces/:id",
        element: (
          <PrivateRoute>
            <Placedetails></Placedetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </UserContext>
  </React.StrictMode>
);

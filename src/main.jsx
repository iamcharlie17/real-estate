import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from 'react-hot-toast';

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home";
import Properties from "./Pages/Properties";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import FirebaseProvider from "./providers/FirebaseProvider";
import PropertyDetails from "./Pages/PropertyDetails";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import UpdateProfile from "./components/UpdateProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/properties",
        element: <PrivateRoute><Properties/></PrivateRoute>,
      },
      {
        path: '/property/:id',
        loader: ()=> fetch('properties.json'),
        element:<PrivateRoute><PropertyDetails/></PrivateRoute>
      },
      {
        path: "/contact-us",
        element: <PrivateRoute><ContactUs /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: '/update-profile',
        element: <UpdateProfile/>
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
      <Toaster />
    </FirebaseProvider>
  </React.StrictMode>
);

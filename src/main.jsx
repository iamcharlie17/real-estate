import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home';
import Properties from './Pages/Properties';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import Register from './Pages/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/properties",
        element: <Properties/>,
        loader: ()=> fetch('properties.json'),
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)

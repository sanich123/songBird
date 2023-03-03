import App from "../pages/main/App";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import ErrorPage from "../pages/error-page/error-page";
import AboutUs from "../pages/about-us/about-us";
import NotFoundPage from "../pages/non-found-page/non-found-page";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: 'about-us',
    element: <AboutUs />
  }
]);

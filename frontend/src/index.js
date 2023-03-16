import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";

import "./index.css";
import BakedGoods from "./Components/BakedGoods";
import Dairy from "./Components/Dairy";
import Drinks from "./Components/Drinks";
import Fruits from "./Components/Fruits";
import Meats from "./Components/Meats";
import Seafood from "./Components/Seafood";
import Vegetables from "./Components/Vegetables";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bakedgoods",
        element: <BakedGoods />,
      },
      {
        path: "/dairy",
        element: <Dairy />,
      },
      {
        path: "/drinks",
        element: <Drinks />,
      },
      {
        path: "/fruits",
        element: <Fruits />,
      },
      {
        path: "/meats",
        element: <Meats />,
      },
      {
        path: "/seafood",
        element: <Seafood />,
      },
      {
        path: "/vegetables",
        element: <Vegetables />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
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


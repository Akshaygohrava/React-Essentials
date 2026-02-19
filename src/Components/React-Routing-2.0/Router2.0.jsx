import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./components/Home";
import Register from "./components/Register";
import Product from "./components/Product";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products/:id",
        element: <Product />,
      },
    ],
  },
]);

export default function Routers() {
  return (
    <>
             <RouterProvider router={router} />
             <h2>hello React Routing !</h2>
    </>
  )
}

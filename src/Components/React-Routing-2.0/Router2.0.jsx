import "../../App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../Components/React-Routing-2.0/common/Layout";
import Home from "../../Components/React-Routing-2.0/Home";
import Register from "../../Components/React-Routing-2.0/Register";
import Product from "../../Components/React-Routing-2.0/Product";
import Notfound from "./Notfound";
import Reducer from "./common/Reducer";

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
      {
        path: "*",
        element: <Notfound />,
      },{
        path: "reducer",
        element: <Reducer />,
      },
    ],
  },
]);

export default function Routers() {
  return (
    <>
             <RouterProvider router={router} />
             <h2>hello React Routing 2.0 !.... new update</h2>
               <Reducer></Reducer>
    

    </>
  )
}

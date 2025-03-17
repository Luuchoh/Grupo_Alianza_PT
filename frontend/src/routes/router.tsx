import { useRoutes } from "react-router";

import Home from "@pages/Home";
import Product from "@pages/Product";
import AddProduct from "@pages/AddProduct";

const Router = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/ProductDetail/:id",
      element: <Product />
    },
    {
      path: "/AddProduct",
      element: <AddProduct />
    },
    
    {
      path: "/EditProduct/:id",
      element: <AddProduct />
    },
  ]);

  return element;
}

export default Router;
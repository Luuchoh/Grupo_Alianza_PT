import { useRoutes } from "react-router";

import Home from "@pages/Home";
import Product from "@pages/Product";
import FormProduct from "@pages/FormProduct";

/**
 * Enrutamiento de todas las paginas
 * 
 * @returns Enrutamiento
 */

const Router = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/detail-product/:id",
      element: <Product />
    },
    {
      path: "/create-product",
      element: <FormProduct />
    },
    
    {
      path: "/edit-product/:id",
      element: <FormProduct />
    },
  ]);

  return element;
}

export default Router;
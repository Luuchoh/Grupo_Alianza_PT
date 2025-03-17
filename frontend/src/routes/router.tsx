import { useRoutes } from "react-router";
import Home from "@pages/Home";

const Router = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
  ]);

  return element;
}

export default Router;
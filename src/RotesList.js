import { useRoutes } from "react-router-dom";
import { Home } from "./Pages/Home";

export const RoutesList = () => {
  return useRoutes([{ path: "/", element: <Home /> }]);
};

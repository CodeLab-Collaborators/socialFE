import { createBrowserRouter } from "react-router-dom";
import { MobileHomeLayOut } from "../components";
import { MobileHomeStart } from "../pages";

export const mobileRouter = createBrowserRouter([
  {
    path: "/",
    element: <MobileHomeLayOut />,
    children: [{ index: true, element: <MobileHomeStart /> }],
  },
]);

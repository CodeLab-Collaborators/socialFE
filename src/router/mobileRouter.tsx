import { createBrowserRouter } from "react-router-dom";
import { MobileHomeLayOut } from "../components";
import { MobileHomeStart } from "../pages";
import MobileStart from "../pages/mobile/MobileStart";
import MobileLayOut from "../components/common/mobileLayout/MobileLayOut";
import Register from "../pages/mobile/auth/Register";

export const mobileRouter = createBrowserRouter([
  {
    path: "/",
    element: <MobileLayOut />,
    children: [
      {
        index: true,
        element: <MobileStart />
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
      {
    path: "/home",
    element: <MobileHomeLayOut />,
    children: [{ index: true, element: <MobileHomeStart /> }],
    }
]);

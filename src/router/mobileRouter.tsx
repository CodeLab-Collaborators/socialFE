import { createBrowserRouter } from "react-router-dom";
import { MobileHomeLayOut } from "../components";
import { MobileHomeStart } from "../pages";
import MobileStart from "../pages/mobile/MobileStart";
import MobileLayOut from "../components/common/mobileLayout/MobileLayOut";
import Register from "../pages/mobile/auth/Register";
import UserProfilePage from "../pages/mobile/userProfile/UserProfilePage";

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
<<<<<<< HEAD
  {
    path: "/user-profile",
    element: <UserProfilePage />,
  },
=======
      {
    path: "/home",
    element: <MobileHomeLayOut />,
    children: [{ index: true, element: <MobileHomeStart /> }],
    }
>>>>>>> f44f003bf5165ff694d33e5c1dcf8faaf43dff9d
]);

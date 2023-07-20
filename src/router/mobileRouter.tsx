import { createBrowserRouter } from "react-router-dom";
import { MobileHomeLayOut } from "../components";
import { SearchPage, SinglePost } from "../pages";
import MobileStart from "../pages/mobile/MobileStart";
import MobileLayOut from "../components/common/mobileLayout/MobileLayOut";
import Register from "../pages/mobile/auth/Register";
import UserProfilePage from "../pages/mobile/userProfile/UserProfilePage";
import UserSettingsPage from "../pages/mobile/userSettings/UserSettingsPage";
import UserUpdatePage from "../pages/mobile/userUpdate/UserUpdatePage";
import ForgetPassword from "../pages/mobile/auth/ForgetPassword";

export const mobileRouter = createBrowserRouter([
  {
    path: "/",
    element: <MobileLayOut />,
    children: [
      {
        index: true,
        element: <MobileStart />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "password-reset",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "/user-profile",
    element: <UserProfilePage />,
  },
  {
    path: "/user-settings",
    element: <UserSettingsPage />,
  },
  {
    path: "/user-update",
    element: <UserUpdatePage />,
  },
  {
    path: "/home",
    element: <MobileHomeLayOut />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/post",
    element: <SinglePost />,
  },
]);

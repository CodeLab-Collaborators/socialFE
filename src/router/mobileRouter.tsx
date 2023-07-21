import { createBrowserRouter } from "react-router-dom";
import MobileStart from "../pages/mobile/MobileStart";
import MobileLayOut from "../components/common/mobileLayout/MobileLayOut";
import Register from "../pages/mobile/auth/Register";
import UserProfilePage from "../pages/mobile/userProfile/UserProfilePage";
import UserSettingsPage from "../pages/mobile/userSettings/UserSettingsPage";
import UserUpdatePage from "../pages/mobile/userUpdate/UserUpdatePage";
import ForgetPassword from "../pages/mobile/auth/ForgetPassword";
import Test from "../pages/mobile/test";
import ViewPosts from "../pages/mobile/viewPosts";
import Search from "../pages/mobile/search";

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
    path: "/test",
    element: <Test />,
  },
  {
    path: "/page/post",
    element: <ViewPosts />,
  },
  {
    path: "/search/people",
    element: <Search />,
  },
]);

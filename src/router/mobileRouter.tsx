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
import CreatePost from "../pages/mobile/pages/post/CreatePost";
import PrivateRouter from "./PrivateRouter";

export const mobileRouter = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRouter>
      <MobileLayOut />
    </PrivateRouter>,
    children: [
      {
        index: true,
        element: <UserProfilePage />,
      },
      {
        path: "user-profile",
    element: <UserProfilePage />,
  },
  {
    path: "user-settings",
    element: <UserSettingsPage />,
  },
  {
    path: "user-update",
    element: <UserUpdatePage />,
  },
  {
    path: "test",
    element: <Test />,
  },
  {
    path: "page/post",
    element: <ViewPosts />,
  },
  {
    path: "search/people",
    element: <Search />,
  },
  {
    path: "/new-yan",
    element: <CreatePost />,
  },

    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/password-reset",
    element: <ForgetPassword />,
  },

]);

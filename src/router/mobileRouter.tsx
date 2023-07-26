import { createBrowserRouter } from "react-router-dom";
// import MobileStart from "../pages/mobile/MobileStart";
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
import Notifications from "../pages/mobile/notifications";
import AllChats from "../pages/mobile/allChats";
// import PrivateRouter from "./PrivateRouter";
// import Verify from "../pages/mobile/auth/Verify";

//Please use these exact routes :
// log in page : "/"
// sign up page : "/register"
// reset password page : "/password-reset"
// verification code page : "/verify"
// home page : "/home-page"
// search page : "/search-page"
// explore page : "/explore-page"
// reels page : "/reels-page"
// messages page : "/messages-page"
// notifications page : "/notifications-page"
// create post page : "/new-yan"
// profile page : "/profile-page"
// settings page : "/user-settings"
// update profile page : "/profile-page/account-update"
// view single post page : "/single-post"
import PrivateRouter from "./PrivateRouter";
import Sign_in from "../pages/mobile/auth/Sign_in";
export const mobileRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <MobileLayOut />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <UserProfilePage />,
      },
      {
        path: "profile-page",
        element: <UserProfilePage />,
      },
      {
        path: "user-settings",
        element: <UserSettingsPage />,
      },
      {
        path: "profile-page/account-update",
        element: <UserUpdatePage />,
      },
      {
        path: "home-page",
        element: <Test />,
      },
      {
        path: "single-post/:id",
        element: <ViewPosts />,
      },
      {
        path: "search-page",
        element: <Search />,
      },
      {
        path: "new-yan",
        element: <CreatePost />,
      },
      {
        path: "/notifications-page",
        element: <Notifications />,
      },
      {
        path: "/messages-page",
        element: <AllChats />,
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
  // {
  //   path: "/verify",
  //   element: <Verify />,
  // },
  {
    path: "/sign-in",
    element: <Sign_in />,
  },
  {
    path: "/api/social/auth/:id/:token/verify",
    element: <Sign_in />,
  },
]);

import { createBrowserRouter, } from "react-router-dom"
import DesktopStart from "../pages/desktop/DesktopStart"
import DesktopLayOut from "../components/common/desktopLayout/DesktopLayOut"
import RegisterScreen from "../pages/desktop/auth/RegisterScreen"
import RegisterInfo from "../pages/desktop/auth/RegisterInfo"
import SignInScreen from "../pages/desktop/auth/SignIn"
import Profiepage from "../pages/desktop/Profiepage"
import Settingsprofile from "../pages/desktop/Settingsprofile"
import NotificationPage from "../pages/desktop/NotificationPage"

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

export const desktopRouter = createBrowserRouter([
  {
    path: "/signin",
    element: <SignInScreen />,
  },
  {
    path: "register",
    element: <RegisterScreen />,
  },
  {
    path: "/",
    element: <DesktopLayOut />,
    children: [
      {
        index: true,
        path: "home",
        element: <DesktopStart />,
      },
      {
        path: "register-info",
        element: <RegisterInfo />,
      },
      {
        path: "api/social/auth/:id/:token/verify",
        element: <SignInScreen />,
      },
    ],
  },
  {
    path: "/profile-page",
    children: [
      {
        index: true,
        element: <Profiepage />,
      },
      {
        path: "account-update",
        element: <Settingsprofile />,
      },
    ],
  },

  {
    path: "notifications",
    element: <NotificationPage />,
  },
  // {
  //     path: "account-update",
  //     element: <Settingsprofile />
  // },
]);

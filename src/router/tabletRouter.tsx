import { createBrowserRouter } from "react-router-dom";
import TabletStart from "../pages/tablet/TabletStart";
import TabletLayOut from "../components/common/tabletLayout/TabletLayOut";
import RegisterTabInfo from "../pages/tablet/auth/RegisterInfo";
import SignInTabScreen from "../pages/tablet/auth/SignInTabScreen";
import RegisterTabScreen from "../pages/tablet/auth/RegisterTabScreen";
import TableProfilePage from "../pages/tablet/TableProfilePage";
import TabletSettings from "../pages/tablet/TabletSettings";
import TabletDashboard from "../components/common/tabletLayout/TabletDashboard";
import TabletViewSideBar from "../components/static/TabletViewSideBar";

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

export const tabletRouter = createBrowserRouter([
  {
    path: "/",
    element: <TabletLayOut />,
    children: [
      {
        index: true,
        element: <SignInTabScreen />,
      },
      {
        path: "register-info",
        element: <RegisterTabInfo />,
      },
      {
        path: "home",
        element: <TabletStart />,
      },
      {
        path: "register",
        element: <RegisterTabScreen />,
      },
      {
        path: "api/social/auth/:id/:token/verify",
        element: <SignInTabScreen />,
      },
    ],
  },
  {
    path: "/profile-page",
    element : <TabletDashboard />,
    children: [
      {
        index: true,
        element: <TableProfilePage />,
      },
      {
        path: "/profile-page/account-update",
        element: <TabletSettings />,
      },
    ],
  },
  {
    path : "/TabletViewSideBar",
    element : <TabletViewSideBar />
  }
]);

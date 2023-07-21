import { createBrowserRouter, } from "react-router-dom"
import DesktopStart from "../pages/desktop/DesktopStart"
import DesktopLayOut from "../components/common/desktopLayout/DesktopLayOut"
import RegisterScreen from "../pages/desktop/auth/RegisterScreen"
import RegisterInfo from "../pages/desktop/auth/RegisterInfo"
import SignInScreen from "../pages/desktop/auth/SignIn"
import Profiepage from "../pages/desktop/Profiepage"
import Settingsprofile from "../pages/desktop/Settingsprofile"
import NotificationPage from "../pages/desktop/NotificationPage"


export const desktopRouter = createBrowserRouter([
    {
        path: "/signin",
        element: <SignInScreen />
    },
    {
        path: "register",
        element: <RegisterScreen />
    },

    {
        path: "/",
        element: <DesktopLayOut />,
        children: [
            {
                index: true,
                path: "home",
                element: <DesktopStart />
            },
            {
                path: "register-info",
                element: <RegisterInfo />
            },
            {
                path: "api/social/auth/:id/:token/verify",
                element: <SignInScreen />
            },
        ]

    },
    {
        path: "/profile-page",
        children: [

            {
                index: true,
                element: <Profiepage />
            },
            {
                path: "account-update",
                element: <Settingsprofile />
            },
        ]
    },

    {
        path: "notifications",
            element:<NotificationPage/>
    },
    // {
    //     path: "account-update",
    //     element: <Settingsprofile />
    // },
])
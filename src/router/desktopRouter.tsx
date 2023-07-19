import { createBrowserRouter, } from "react-router-dom"
import DesktopStart from "../pages/desktop/DesktopStart"
import DesktopLayOut from "../components/common/desktopLayout/DesktopLayOut"
import RegisterScreen from "../pages/desktop/auth/RegisterScreen"
import RegisterInfo from "../pages/desktop/auth/RegisterInfo"
import SignInScreen from "../pages/desktop/auth/SignIn"
import Profiepage from "../pages/desktop/Profiepage"


export const desktopRouter = createBrowserRouter([
    {
        path: "/",
        element: <DesktopLayOut />,
        children: [
            {
                index: true,
                element: <SignInScreen />
            },
            {
                path: "register-info",
                element: <RegisterInfo />
            },
            {
                path: "home",
                element: <DesktopStart />
            },
            {
                path: "register",
                element: <RegisterScreen />
            },
            {
                path: "api/social/auth/:id/:token/verify",
                element: <SignInScreen />
            },
            {
                path: "profile_page",
                element: <Profiepage/>
            },
        ]

    }
])
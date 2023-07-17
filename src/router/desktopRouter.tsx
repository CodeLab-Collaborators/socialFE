import { createBrowserRouter, } from "react-router-dom"
import DesktopStart from "../pages/desktop/DesktopStart"
import DesktopLayOut from "../components/common/desktopLayout/DesktopLayOut"
import RegisterScreen from "../components/common/desktopLayout/auth/RegisterScreen"
import RegisterInfo from "../components/common/desktopLayout/auth/RegisterInfo"
import SignInScreen from "../components/common/desktopLayout/auth/SignIn"


export const desktopRouter = createBrowserRouter([
    {
        path: "/",
        element: <DesktopLayOut />,
        children: [
            {
                index: true,
                element: <RegisterScreen />
            },
            {
                path: "/register-info",
                element: <RegisterInfo />
            },
            {
                path: "/home",
                element: <DesktopStart />
            },
            {
                path: "/sign-in",
                element: <SignInScreen />
            },
            {
                path: "/api/social/auth/:id/:token/verify",
                element: <SignInScreen />
            },
        ]

    }
])
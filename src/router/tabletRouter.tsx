import { createBrowserRouter, } from "react-router-dom"
import TabletStart from "../pages/tablet/TabletStart"
import TabletLayOut from "../components/common/tabletLayout/TabletLayOut"
import RegisterTabInfo from "../pages/tablet/auth/RegisterInfo"
import SignInTabScreen from "../pages/tablet/auth/SignInTabScreen"
import RegisterTabScreen from "../pages/tablet/auth/RegisterTabScreen"



export const tabletRouter = createBrowserRouter([
    {
        path: "/",
        element: <TabletLayOut />,
        children: [
            {
                index: true,
                element: <SignInTabScreen />
            },
            {
                path: "register-info",
                element: <RegisterTabInfo />
            },
            {
                path: "home",
                element: <TabletStart />
            },
            {
                path: "register",
                element: <RegisterTabScreen />
            },
            {
                path: "api/social/auth/:id/:token/verify",
                element: <SignInTabScreen />
            },
        ]

    }
])
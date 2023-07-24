import { createBrowserRouter, } from "react-router-dom"
import TabletStart from "../pages/tablet/TabletStart"
import TabletLayOut from "../components/common/tabletLayout/TabletLayOut"
import RegisterTabInfo from "../pages/tablet/auth/RegisterInfo"
import SignInTabScreen from "../pages/tablet/auth/SignInTabScreen"
import RegisterTabScreen from "../pages/tablet/auth/RegisterTabScreen"
import PrivateRouter from "./PrivateRouter"



export const tabletRouter = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRouter>
            <TabletLayOut />
        </PrivateRouter>,
        children: [
            {
                index: true,
                element: <TabletStart />
            },

        ]

    },

    {
        path: "/register-info",
        element: <RegisterTabInfo />
    },

    {
        path: "/register",
        element: <RegisterTabScreen />
    },
    {
        path: "/signin",
        element: <SignInTabScreen />
    },
    {
        path: "/api/social/auth/:id/:token/verify",
        element: <SignInTabScreen />
    },
])
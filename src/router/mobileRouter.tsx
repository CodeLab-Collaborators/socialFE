import { createBrowserRouter, } from "react-router-dom"
import MobileStart from "../pages/mobile/MobileStart"
import MobileLayOut from "../components/common/mobileLayout/MobileLayOut"


export const mobileRouter = createBrowserRouter([
    {
        path: "/",
        element: <MobileLayOut />,
        children: [
            { index: true, element: <MobileStart /> }
        ]

    }
])
import { createBrowserRouter, } from "react-router-dom"
import LayoutScreen from '../components/common/LayoutScreen'
import MobileStart from "../pages/mobile/MobileStart"


export const mobileRouter = createBrowserRouter([
    {
        path: "/",
        element: <LayoutScreen />,
        children: [
            { index: true, element: <MobileStart /> }
        ]

    }
])
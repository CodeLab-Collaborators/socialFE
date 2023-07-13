import { createBrowserRouter, } from "react-router-dom"
import LayoutScreen from '../components/common/LayoutScreen'
import DesktopStart from "../pages/desktop/DesktopStart"


export const desktopRouter = createBrowserRouter([
    {
        path: "/",
        element: <LayoutScreen />,
        children: [
            { index: true, element: <DesktopStart /> }
        ]

    }
])
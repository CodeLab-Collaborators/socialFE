import { createBrowserRouter, } from "react-router-dom"
import LayoutScreen from '../components/common/LayoutScreen'
import TabletStart from "../pages/tablet/TabletStart"


export const tabletRouter = createBrowserRouter([
    {
        path: "/",
        element: <LayoutScreen />,
        children: [
            { index: true, element: <TabletStart /> }
        ]

    }
])
import { createBrowserRouter, } from "react-router-dom"
import TabletStart from "../pages/tablet/TabletStart"
import TabletLayOut from "../components/common/tabletLayout/TabletLayOut"


export const tabletRouter = createBrowserRouter([
    {
        path: "/",
        element: <TabletLayOut />,
        children: [
            { index: true, element: <TabletStart /> }
        ]

    }
])
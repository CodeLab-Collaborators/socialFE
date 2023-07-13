import { RouterProvider } from "react-router-dom"
import { desktopRouter } from "./desktopRouter"
import { tabletRouter } from "./tabletRouter"
import { mobileRouter } from "./mobileRouter"


export const MainRouter = () => {
    return (
        <div>
            <div className='hidden sm:hidden md:hidden lg:flex' >
                <RouterProvider router={desktopRouter} />
            </div>
            <div className='hidden sm:hidden md:flex lg:hidden '  ><RouterProvider router={tabletRouter} /></div>
            <div className='xm:flex  sm:flex md:hidden lg:hidden'><RouterProvider router={mobileRouter} /></div>

        </div>
    )
}


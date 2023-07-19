
import { Outlet } from 'react-router-dom'
import DestopFooter from '../../static/DestopFooter'

const TabletLayOut = () => {
    return (
        <div>
            <Outlet />
            <DestopFooter />
        </div>
    )
}

export default TabletLayOut
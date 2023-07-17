
import { Outlet } from 'react-router-dom'
import DestopFooter from '../../static/DestopFooter'

const DesktopLayOut = () => {
    return (
        <div>
            <Outlet />
            <DestopFooter />
        </div>
    )
}

export default DesktopLayOut

import { Outlet } from 'react-router-dom'
import TabletViewSideBar from '../../static/TabletViewSideBar'
import DestopFooter from '../../static/DestopFooter'


const TabletDashboard = () => {
    return (
<div>
    <TabletViewSideBar />
    <Outlet />
    <DestopFooter />
</div>
           
    
    )
}

export default TabletDashboard

import { Outlet } from 'react-router-dom'
import TabletViewSideBar from '../../static/TabletViewSideBar'


const TabletDashboard = () => {
    return (
<div>
    <TabletViewSideBar />
    <Outlet />
</div>
           
    
    )
}

export default TabletDashboard
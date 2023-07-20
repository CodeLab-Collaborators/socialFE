
import LeftSidebar from '../../components/static/LeftSidebar'
import {FiSettings} from "react-icons/fi"

const NotificationPage = () => {
  return (
 <div className="flex w-[100%]">
     <LeftSidebar/>
     {/* NOTIFICTION PAGE STYLING */}
  <div className='w-[100%] bg-[red] h-[400px] justify-end flex'>
    <div className='w-[90%] bg-[green] h-[50px]' style={{ width: "calc(100% - 18%)" }}>
        Notifications
        <FiSettings/>
    </div>
  </div>
 </div>
  )
}

export default NotificationPage
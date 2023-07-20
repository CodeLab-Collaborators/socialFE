
import LeftSidebar from '../../components/static/LeftSidebar'
import {FiSettings} from "react-icons/fi"
import RightSidebar from '../../components/static/RightSidebar'
import Profilepost from './Profilepost'
import Profilesaved from './Profilesaved'
import Profiletagged from './Profiletagged'
import { useState } from 'react'

const NotificationPage = () => {

  const [show, setShow] = useState(true)
  const [showsaved, setShowsaved] = useState(false)
  const [showtagged, setShowtagged] = useState(false)

  const Toggle = () => {
    setShow(!show)
    setShowsaved(false)
    setShowtagged(false)
  }

  const Toggle2 = () => {
    setShowsaved(true)
    setShow(false)
    setShowtagged(false)
  }

  const Toggle3 = () => {
    setShowtagged(true)
    setShowsaved(false)
    setShow(false)
  }

  return (
 <div className="flex w-[100%]">
     <LeftSidebar/>
     {/* NOTIFICTION PAGE STYLING */}
  <div className='w-[100%] bg-[red] h-[400px] justify-end flex'>
    <div className='w-full bg-[yellow] h-[50px] flex justify-between items-center text-[20px] p-[30px]' style={{ width: "calc(100% - 23%)" }}>
        Notifications
      <div className='cursor-pointer'>
      <FiSettings/>
      </div> 
    </div>
    
  </div>
  <RightSidebar/>
 </div>
  )
}

export default NotificationPage
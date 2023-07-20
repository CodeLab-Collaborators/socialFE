
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
  <div  style={{ width: "calc(100% - 23%)" }} className='bg-[red] ml-[18%] h-[400px] flex flex-col'>
    <div className='w-full bg-[yellow] h-9 flex justify-between items-center text-[20px] p-[30px]'>
        Notifications
      <div className='cursor-pointer'>
      <FiSettings/>
      </div> 
    </div>
   <div className="w-full h-8 bg-[pink] flex justify-center items-center pl-[23px] pr-[23px]">
    <div className='flex justify-between items-center w-full bg-[purple]'>
      <h4>All</h4>
      <h4>Friends</h4>
      <h4>Notie</h4>
    </div>
   </div>
  </div>
  <RightSidebar/>
 </div>
  )
}

export default NotificationPage
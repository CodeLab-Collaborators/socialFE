
import LeftSidebar from '../../components/static/LeftSidebar'
import {FiSettings} from "react-icons/fi"
import RightSidebar from '../../components/static/RightSidebar'
import { useState } from 'react'
import All from './All'
import Verified from '../Verified'
import Mentions from './Mentions'

const NotificationPage = () => {

  const [show, setShow] = useState(true)
  const [showVerified, setShowverified] = useState(false)
  const [showMention, setShowMention] = useState(false)

  const Toggle = () => {
    setShow(!show)
    setShowverified(false)
    setShowMention(false)
  }

  const Toggle2 = () => {
    setShowverified(true)
    setShow(false)
    setShowMention(false)
  }

  const Toggle3 = () => {
    setShowMention(true)
    setShowverified(false)
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
   <div className='w-[90%] items-center justify-center column bg-[blue]'>
   <div className='flex justify-between items-center w-full bg-[purple] '>
      <h4 onClick={Toggle} className="text-[20px] mr-[40px] cursor-pointer">All</h4>
      <h4 onClick={Toggle2} className="text-[20px] mr-[40px] cursor-pointer">Friends</h4>
      <h4 onClick={Toggle3} className="text-[20px] mr-[40px] cursor-pointer">Notie</h4>
    </div>
   </div>
   
   </div>
   {
      show ? (
        <All/>
      ) : null 
    }
    {
      showVerified ? (
        <Verified/> 
      ) :null
    } 
    {
      showMention ? (
        <Mentions/>
      ) :null 
    }
  </div>
  <RightSidebar/>
 </div>
  )
}

export default NotificationPage
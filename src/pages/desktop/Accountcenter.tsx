import { GoPerson } from "react-icons/go"
import {BsShieldCheck, BsCardText} from "react-icons/bs"

const Accountcenter = () => {
  return (
        <div className="border-b border-gray-300 w-[100%]">
      <h2 className="text-[17px] font-semibold mb-4">Accounts Center</h2>
      <p className="text-gray-600 mb-4 text-[13px]">
        Manage your connected experiences and account settings across Meta technologies.
      </p>
      <div className="list-disc list-inside">
        <div className="flex cursor-pointer pb-[2px]">
            <div className="text-[19px]"><GoPerson /></div> 
            <h3 className="text-[13px] ml-[10px]">Personal details</h3>      
        </div>
        <div className="flex cursor-pointer pb-[2px]">
            <div className="text-[19px]"><BsShieldCheck /></div> 
            <h3 className="text-[13px] ml-[10px]">Password and security</h3>      
        </div>
        <div className="flex cursor-pointer pb-[2px]">
            <div className="text-[19px]"><BsCardText /></div> 
            <h3 className="text-[13px] ml-[10px]">Ad preference</h3>      
        </div>
      </div>
      <p className="text-blue-600 mt-4 text-[13px] cursor-pointer">See more in Accounts Center</p>
    </div>
  )
}

export default Accountcenter
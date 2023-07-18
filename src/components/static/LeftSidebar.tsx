import { AiFillHome, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai"
import { BiSearch, BiMoviePlay } from "react-icons/bi"
import { MdOutlineExplore } from "react-icons/md"
import { BsSend, BsPlusSquare } from "react-icons/bs"
import img from "../../assets/myPix.png"

const LeftSidebar = () => {
  return (
      <div className="w-[18%] h-[100vh] bg-[#fff] border-r border-[#DBDBDB] column pt-[40px] pl-[20px] pr-[20px] fixed">
          <h2 className="text-[18px]">Ajegunle_Connect</h2>

      <div className="flex items-center w-[100%] p-[13px] rounded-md mt-[30px] hover:bg-[#F2F2F2] cursor-pointer">
        <div className="text-[25px]"><AiFillHome /></div>
        <h3 className="text-[#202020] ml-[15px]">Home</h3>
          </div>
          
           <div className="flex items-center w-[100%] p-[13px] rounded-md mt-[8px] hover:bg-[#F2F2F2] cursor-pointer">
        <div className="text-[25px]"><BiSearch /></div>
        <h3 className="text-[#202020] ml-[15px]">Search</h3>
      </div>

      <div className="flex items-center w-[100%] p-[13px] rounded-md mt-[8px] hover:bg-[#F2F2F2] cursor-pointer">
        <div className="text-[25px]"><MdOutlineExplore /></div>
        <h3 className="text-[#202020] ml-[15px]">Explore</h3>
      </div>

      <div className="flex items-center w-[100%] p-[13px] rounded-md mt-[8px] hover:bg-[#F2F2F2] cursor-pointer">
        <div className="text-[25px]"><BiMoviePlay /></div>
        <h3 className="text-[#202020] ml-[15px]">Reels</h3>
          </div>
          
           <div className="flex items-center w-[100%] p-[13px] rounded-md mt-[8px] hover:bg-[#F2F2F2] cursor-pointer">
        <div className="text-[25px]"><BsSend /></div>
        <h3 className="text-[#202020] ml-[15px]">Messages</h3>
      </div>

      <div className="flex items-center w-[100%] p-[13px] rounded-md mt-[8px] hover:bg-[#F2F2F2] cursor-pointer">
        <div className="text-[25px]"><AiOutlineHeart /></div>
        <h3 className="text-[#202020] ml-[15px]">Notifications</h3>
      </div>

      <div className="flex items-center w-[100%] p-[13px] rounded-md mt-[8px] hover:bg-[#F2F2F2] cursor-pointer">
        <div className="text-[25px]"><BsPlusSquare /></div>
        <h3 className="text-[#202020] ml-[15px]">Create</h3>
      </div>

           <div className="flex items-center w-[100%] p-[13px] rounded-md mt-[8px] hover:bg-[#F2F2F2] cursor-pointer">
        <img src={img} className="rounded-xl h-[26px] w-[26px] object-cover" />
        <h3 className="text-[#202020] ml-[15px]">Profile</h3>
      </div>

      <div className="flex items-center w-[100%] p-[13px] rounded-md mt-[30px] hover:bg-[#F2F2F2] cursor-pointer">
        <div className="text-[25px]"><AiOutlineMenu /></div>
        <h3 className="text-[#202020] ml-[15px]">More</h3>
      </div>
    </div>
  )
}

export default LeftSidebar
import LeftSidebar from "../../components/static/LeftSidebar"
import img from "../../assets/myPix.png"
import {CiSettings} from "react-icons/ci"


const Profiepage = () => {
  return (
      <div className="flex w-[100%]">
          <LeftSidebar />
          <div className="flex-[1] h-[100%] column items-center justify-center bg-[#fff] pt-[40px]">
              
              <div className="flex h-[100%] bg-[#fff] justify-center pb-[55px]">
                  <img src={img} className="w-[130px] h-[130px] rounded-[100px] object-cover" />
                  {/* <div className="text-[green]">hfhfhfhf</div> */}

          <div className="column ml-[74px]">
            <div className="flex w-[100%]">
              <h3 className="text-[20px]">Peter.Otti</h3>
              <button className="w-[110px] h-[38px] bg-[#262626] text-[#fff] rounded-md ml-[30px]">
                Edit profile
              </button>
              <div className="text-[28px] ml-[30px]"><CiSettings /></div>
            </div>
            
            <div className="mt-[20px] flex">
              <h4>19 posts</h4>
              <h4 className="ml-[38px]">128 followers</h4>
              <h4 className="ml-[38px]">222 following</h4>
            </div>

            <div className="w-[100px] px-1 mt-[15px] flex-wrap overflow-hidden">
              <div className="">
                ududgudgudgdugdydydddgddhhdhdhdh
             </div>
            </div>
        </div>
             </div>
        
        <div className=" w-[100%] flex justify-center items-center">
          <div className="w-[65%] h-[2px] bg-[#DBDBDB] ml-[230px]"></div>
        </div>
          </div>
    </div>
  )
}

export default Profiepage
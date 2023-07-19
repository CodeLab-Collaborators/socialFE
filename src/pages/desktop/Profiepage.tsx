import LeftSidebar from "../../components/static/LeftSidebar"
import img from "../../assets/myPix.png"
import {CiSettings} from "react-icons/ci"


const Profiepage = () => {
  return (
      <div className="flex w-[100%]">
          <LeftSidebar />
          <div className="flex-[1] h-[100%] column items-center bg-[#fff] pt-[40px]">
              
              <div className="flex h-[100%] bg-[#fff] justify-center">
                  <img src={img} className="w-[130px] h-[130px] rounded-[100px] object-cover" />
                  {/* <div className="text-[green]">hfhfhfhf</div> */}

          <div className="flex column ml-[74px]">

            <div className="flex items-center">
              <h3 className="text-[20px]">Peter.Otti</h3>
              <button className="w-[110px] h-[38px] bg-[#262626] text-[#fff] rounded-md ml-[30px]">
                Edit profile
              </button>
              <div className="text-[28px] ml-[30px]"><CiSettings /></div>
            </div>
        </div>
        </div>
          </div>
    </div>
  )
}

export default Profiepage
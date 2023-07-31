import Postfile from "./Postfile"
import img from "../../assets/chelsea.jpg"
import img2 from "../../assets/clubs.jpg"
import {BiDotsHorizontalRounded} from "react-icons/bi"

const DesktopStart = () => {
    return (
        <div className="w-[100%]  border-r border-[#DBDBDB] ml-[245px] z-10">

            <div className="w-[52%] h-[160px] column border-b border-[#DBDBDB] pt-[40px] fixed backdrop-blur-lg overflow-hidden">
                <h3 className="text-[21px] ml-[20px]">Home</h3>
                <div className="w-[100%] flex justify-around mt-[45px]">
                    <h4 className="pb-[15px] border-b-[3px] border-[blue]">For you</h4>
                    <h4>Following</h4>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Postfile />

            {/* <div>y</div> */}

            <div className="w-[100%] pl-[20px] pr-[20px] mt-[12px]">
                <div className="w-[100%] flex h-[100%] justify-between">
                    <div className="w-[55px] h-[55px] rounded-full overflow-hidden">
                        <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
                    </div>

                    <div className="w-[90%] flex-col">
                        <div className="w-[100%] flex items-center justify-between">
                            <div className="flex">
                                <h3 className="text-[16px] font-medium">Transfer News Live</h3>
                                <p className="text-[15px] text-[gray] ml-[7px]">@Deadlineday .</p>
                                <p className="text-[15px] text-[gray] ml-[5px]">22h</p>
                            </div>
                            <div className="text-[23px] text-[gray] cursor-pointer"><BiDotsHorizontalRounded /></div>
                        </div>

                        <div className="w-[90%] flex flex-wrap">
                            <p className="text-[14px]">🚨You're an 18-year old wonder-kid with the world at your feet. ⭐</p>
                            <p className="text-[14px] mt-4">
                               All of these clubs + every club in Saudi Arabia want to sign you.
                            </p>
                            <p className="text-[14px] mt-4">Who do you sign for? ✍️👇</p>
                        </div>

                        <div className="w-[100%] h-[400px] bg-[red] rounded-lg mt-[10px] overflow-hidden">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopStart
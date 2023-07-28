import Postfile from "./Postfile"
import img from "../../assets/chelsea.jpg"

const DesktopStart = () => {
    return (
        <div className="w-[100vw] h-[100%] pt-[40px] border-r border-[#DBDBDB] ml-[245px]">

            <div className="w-[100%] h-[120px] column border-b border-[#DBDBDB] sticky">
                <h3 className="text-[21px] ml-[20px]">Home</h3>
                <div className="w-[100%] flex justify-around mt-[45px]">
                    <h4 className="pb-[15px] border-b-[3px] border-[blue]">For you</h4>
                    <h4>Following</h4>
                </div>
            </div>

               <Postfile />

            <div className="w-[100%] h-[100vh] pr-[20px] pl-[20px] pt-[15px] flex-col">
                <div className="w-[100%] flex h-[40px]">
                    <div className="w-[55px] h-[55px] rounded-full overflow-hidden">
                        <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopStart
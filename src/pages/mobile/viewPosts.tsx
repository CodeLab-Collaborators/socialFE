import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ProfilePhotos from "../../components/mobile/reusables/profilePhotos";
import { SlOptions } from "react-icons/sl";
import ave from "../../assets/tony.jpg";
import Name from "../../components/mobile/reusables/name";
import cover from "../../assets/ave.jpg";
import Icons from "../../components/mobile/reusables/icons";
import { PiChatCircleLight } from "react-icons/pi";
import { LiaRetweetSolid } from "react-icons/lia";
import { BsSend } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

const ViewPosts = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full pb-12 min-h-screen bg-white">
      <div className="pl-5 flex items-center py-4 bg-white gap-5">
        <div
          onClick={() => {
            navigate(-1);
          }}>
          <FiArrowLeft style={{ fontSize: "20px" }} />
        </div>
        <div>Yet</div>
      </div>
      <div className="w-full mt-4 flex flex-col items-center">
        <div className="w-[88%]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ProfilePhotos sizeInPexels="30px" photo={ave} />
              <Name color="blue" name="Robert Downey Junior" />
            </div>
            <div className="text-xs flex items-center gap-5">
              <div className="text-[grey]">12h</div>
              <SlOptions />
            </div>
          </div>
          <div className="text-[11px] font-normal mt-3">
            {`Lionel Messi was unveiled by Inter Miami to a sold-out crowd of around 20,000 fans 🏁🦄.... His former teammate Sergio Busquets was also unveiled, after signing a contract for the club until 2025 ✍😍`}
          </div>
        </div>
        <div className="flex mt-3 gap-2 overflow-x-scroll no-scrollbar">
          <img
            src={cover}
            className="w-screen h-[300px] md:hidden object-top"
          />
        </div>
        <div className="w-full py-5 border-b-[1px] border-b-slate-200 flex flex-col items-center">
          <div className="w-[88%] flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <Icons sizeInPexels="20px" icon={<PiChatCircleLight />} />
              <Icons sizeInPexels="20px" icon={<LiaRetweetSolid />} />
              <Icons sizeInPexels="20px" icon={<BsSend />} />
            </div>
            <div className="text-[11px] text-gray-600 flex gap-1 items-center">
              <div>67 replies</div>
              <BsDot />
              <div>1,040 views</div>
            </div>
          </div>
        </div>
        <div className="w-full py-5 border-b-[1px] border-b-slate-200 flex flex-col items-center">
          <div className="w-[88%] flex gap-4">
            <ProfilePhotos sizeInPexels="26px" photo={ave} />
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <Name color="blue" name="Robert Downey Junior" />
                <div className="text-xs flex items-center gap-5">
                  <div className="text-[grey]">12h</div>
                  <SlOptions />
                </div>
              </div>
              <div className="text-[11px] font-normal mt-3">
                {`Will the GOAT turn fortunes around and gey Inter Miami off from bottom
          of the MLS ? 🤔`}
              </div>
              <div className="w-[88%] flex flex-col gap-5">
                <div className="flex items-center gap-6">
                  <Icons sizeInPexels="20px" icon={<PiChatCircleLight />} />
                  <Icons sizeInPexels="20px" icon={<LiaRetweetSolid />} />
                  <Icons sizeInPexels="20px" icon={<BsSend />} />
                </div>
                <div className="text-[11px] text-gray-600 flex gap-1 items-center">
                  <div>67 replies</div>
                  <BsDot />
                  <div>1,040 views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed w-full bottom-0 py-[6px] flex justify-center items-center">
        <div className="w-[92%] p-1 bg-slate-200 rounded-3xl flex gap-4">
          <ProfilePhotos sizeInPexels="25px" photo={ave} />
          <input
            className="placeholder:text-[#8d8d8d] placeholder:text-xs text-xs bg-transparent focus:outline-none"
            placeholder="Reply to Pepper Potts"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewPosts;

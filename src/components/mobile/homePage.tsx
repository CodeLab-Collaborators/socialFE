import ProfilePhotos from "./reusables/profilePhotos";
import avatar from "../../assets/tony.jpg";
import cover from "../../assets/ave.jpg";
import Name from "./reusables/name";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import Icons from "./reusables/icons";
import { TfiComment } from "react-icons/tfi";
import { AiOutlineRetweet } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";
import { PiShareFatThin } from "react-icons/pi";

const HomePage = () => {
  return (
    <div className="w-full py-5 pb-16 flex justify-center">
      <div className="w-[90%] flex flex-col gap-9">
        <div className="w-full flex gap-[5%]">
          <div className="w-fit">
            <ProfilePhotos sizeInPexels="30px" photo={avatar} />
          </div>
          <div className="text-[11px] flex-1">
            <Link to="/single-post">
              <div className="flex w-full text-gray-700 items-center gap-1">
                <Name name="Tony Stark" color="goldenrod" />
                @tonystark
                <div>
                  <BsDot />
                </div>
                <div>40mns</div>
              </div>
              <div>One year anniversary</div>
              <div className="w-full h-fit mt-3">
                <img
                  className="w-full h-[200px] rounded-lg"
                  src={cover}
                  alt=""
                />
              </div>
            </Link>
            <div className="w-full mt-4 flex justify-between">
              <div className="flex items-center gap-1">
                <Icons sizeInPexels="13px" icon={<TfiComment />} />
                <div className="text-[11px]">255</div>
              </div>
              <div className="flex items-center gap-1">
                <Icons sizeInPexels="13px" icon={<AiOutlineRetweet />} />
                <div className="text-[11px]">255</div>
              </div>
              <div className="flex items-center gap-1">
                <Icons sizeInPexels="13px" icon={<HiOutlineEye />} />
                <div className="text-[11px]">255</div>
              </div>
              <Icons sizeInPexels="15px" icon={<PiShareFatThin />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

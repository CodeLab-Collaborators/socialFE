import { PiChatCircleLight } from "react-icons/pi";
import { LiaRetweetSolid } from "react-icons/lia";
import { BsDot } from "react-icons/bs";
import { PiShareFatThin } from "react-icons/pi";
import { SlOptions } from "react-icons/sl";
import ProfilePhotos from "./reusables/profilePhotos";
import Name from "./reusables/name";
import Icons from "./reusables/icons";

type iComments = {
  profilePhoto: any;
  name: string;
  time: string;
  comment: string;
  replies: string;
  views: string;
};

const Comments: React.FC<iComments> = ({
  profilePhoto,
  name,
  time,
  comment,
  replies,
  views,
}) => {
  return (
    <div className="w-full flex justify-center py-2 border-b-[1px] border-slate-200">
      <div className="w-[88%] flex gap-4">
        <ProfilePhotos sizeInPexels="30px" photo={profilePhoto} />
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between">
            <Name color="#066fd8" name={name} />
            <div className="text-xs flex items-center gap-5">
              <div className="text-[grey]">{time}</div>
              <SlOptions />
            </div>
          </div>
          <div className="text-[11px] font-normal mt-3">{comment}</div>
          <div className="w-[88%] mt-3 flex flex-col gap-5">
            <div className="flex items-center gap-6">
              <label className="w-fit h-fit" htmlFor="comment">
                <Icons sizeInPexels="20px" icon={<PiChatCircleLight />} />
              </label>
              <Icons sizeInPexels="20px" icon={<LiaRetweetSolid />} />
              <Icons sizeInPexels="20px" icon={<PiShareFatThin />} />
            </div>
            <div className="text-[11px] text-gray-600 flex gap-1 items-center">
              <div>{replies} replies</div>
              <BsDot />
              <div>{views} views</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;

import { ProfilePhoto } from ".";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { PiChatCircleLight } from "react-icons/pi";
import { LiaRetweetSolid } from "react-icons/lia";
import { BsSend } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import { iComment } from "../../../types";

const Comments: React.FC<iComment> = ({
  name,
  avatar,
  time,
  comment,
  replies,
  views,
}) => {
  return (
    <div className="px-4 border-b-[1px] border-b-slate-200 pb-4 flex gap-3 mt-4">
      <div>
        <ProfilePhoto avatar={avatar} size="30px" />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex text-xs items-center gap-1">
            <div className="font-[600]">{name}</div>
            <div className="text-[10px] text-blue-500">
              <BsFillCheckCircleFill />
            </div>
          </div>
          <div className="text-xs flex items-center gap-6">
            <div className="text-gray-500">{time}</div>
            <SlOptions />
          </div>
        </div>
        <div className="text-xs">{comment}</div>
        <div className="flex gap-5 text-xl">
          <PiChatCircleLight />
          <LiaRetweetSolid />
          <BsSend />
        </div>
        <div className="text-gray-500  text-xs flex items-center gap-2">
          <div>{replies} replies</div>
          <div className="flex items-center text-[3px]">
            <BsFillCircleFill />
          </div>
          <div>{views} views</div>
        </div>
      </div>
    </div>
  );
};

export default Comments;

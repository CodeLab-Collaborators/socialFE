import { ProfilePhoto } from ".";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ava from "../../../assets/pr1.webp";

const PostHead = () => {
  return (
    <div className="flex gap-2">
      <ProfilePhoto avatar={ava} size="33px" />
      <div className="text-xs text-slate-700">
        <div className="flex gap-1 items-start">
          <div className="font-bold">CNN</div>
          <div className="text-[7px] mt-[3px] text-[#e9cf3d]">
            <BsFillCheckCircleFill />
          </div>
          <div className="flex text-[13px] items-center">
            <span className="mt-[-3px] font-sans">@</span>CNN
          </div>
          <div className="h-[14px] w-2 justify-center flex items-center font-bold">
            <div className="w-[3px] bg-slate-800 h-[3px] rounded-[50%]" />
          </div>
          <div>21h</div>
        </div>
        <div className="text-[11px]">Who's tattoo is this?</div>
      </div>
    </div>
  );
};

export default PostHead;

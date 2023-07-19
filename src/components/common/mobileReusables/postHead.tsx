import { BsFillCheckCircleFill } from "react-icons/bs";
import { iPostHeading } from "../../../types";

const PostHead: React.FC<iPostHeading> = ({ name, time, title }) => {
  return (
    <div className="flex gap-2">
      <div className="text-xs text-slate-700">
        <div className="flex gap-1 items-start">
          <div className="font-bold">{name}</div>
          <div className="text-[7px] mt-[3px] text-[#e9cf3d]">
            <BsFillCheckCircleFill />
          </div>
          <div className="flex text-[13px] items-center">
            <span className="mt-[-3px] font-sans">@</span>
            {name}
          </div>
          <div className="h-[14px] w-2 justify-center flex items-center font-bold">
            <div className="w-[3px] bg-slate-800 h-[3px] rounded-[50%]" />
          </div>
          <div>{time}</div>
        </div>
        <div className="text-[11px]"> {title} </div>
      </div>
    </div>
  );
};

export default PostHead;

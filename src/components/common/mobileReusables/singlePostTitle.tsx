import { ProfilePhoto } from ".";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { iSinglePostTitle } from "../../../types";

const SinglePostTitle: React.FC<iSinglePostTitle> = ({
  name,
  avatar,
  time,
}) => {
  return (
    <div className="px-4 flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <ProfilePhoto size="36px" avatar={avatar} />
        <div className="flex text-xs items-center gap-1">
          <div className="font-[600]">{name}</div>
          <div className="text-[10px] text-blue-500">
            <BsFillCheckCircleFill />
          </div>
        </div>
      </div>
      <div className="text-xs flex items-center gap-6">
        <div className="text-gray-500">{time}</div>
        <SlOptions />
      </div>
    </div>
  );
};

export default SinglePostTitle;

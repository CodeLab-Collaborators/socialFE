import { ProfilePhoto } from ".";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { iRecent } from "../../../types";

const Recents: React.FC<iRecent> = ({ avatar, name, userName }) => {
  return (
    <div className="w-fit text-xs font-light text-white flex flex-col justify-center items-center">
      <ProfilePhoto size="45px" avatar={avatar} />
      <div className="mt-2 flex flex-col items-center">
        <div className="flex items-center gap-1">
          <div>{name}</div>
          <div className="text-[10px] text-blue-500">
            <BsFillCheckCircleFill />
          </div>
        </div>
        <div className="text-[10px] text-gray-400">{userName}</div>
      </div>
    </div>
  );
};
export default Recents;

import { BsDot } from "react-icons/bs";
import Name from "./reusables/name";
import ProfilePhotos from "./reusables/profilePhotos";

type iDMs = {
  profilePhoto: any;
  name: string;
  userName: string;
  time: string;
  lastMessage: string;
};

const DirectMessages: React.FC<iDMs> = ({
  profilePhoto,
  name,
  userName,
  time,
  lastMessage,
}) => {
  return (
    <div className="w-full flex justify-center items-center cursor-pointer">
      <div className="w-[90%] h-fit flex gap-2 items-start">
        <ProfilePhotos sizeInPexels="45px" photo={profilePhoto} />
        <div className="flex-1 h-[45px] overflow-ellipsis text-xs">
          <div className="flex flex-wrap items-center gap-1">
            <Name name={name} color="blue" />
            <div className="text-[#808080]">{userName}</div>
            <BsDot />
            <div className="text-[#808080]"> {time} </div>
          </div>
          <div className="text-[#808080]">{lastMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default DirectMessages;

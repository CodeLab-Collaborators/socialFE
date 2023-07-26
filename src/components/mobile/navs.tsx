import { Link } from "react-router-dom";
import Icons from "./reusables/icons";
import {
  PiHouseSimpleThin,
  PiChatTextThin,
  PiNotificationThin,
} from "react-icons/pi";
import { TfiSearch } from "react-icons/tfi";
import avatar from "../../assets/tony.jpg";
import ProfilePhotos from "./reusables/profilePhotos";

const Navs = () => {
  return (
    <div className="fixed w-screen border-[1px] bg-white border-t-slate-300 bottom-0 py-[14px] flex items-center text-sm justify-between px-4">
      <Link to="/home-page">
        <Icons icon={<PiHouseSimpleThin />} sizeInPexels="20px" />
      </Link>
      <Link to="/search-page">
        <Icons icon={<TfiSearch />} sizeInPexels="20px" />
      </Link>
      <Link to="/messages-page">
        <Icons icon={<PiChatTextThin />} sizeInPexels="20px" />
      </Link>
      <Link to="/notifications-page">
        <Icons icon={<PiNotificationThin />} sizeInPexels="20px" />
      </Link>
      <ProfilePhotos sizeInPexels="24px" photo={avatar} />
    </div>
  );
};

export default Navs;

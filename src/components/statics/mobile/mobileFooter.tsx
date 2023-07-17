// This is the mobile footer, which holds navigations to all the pages

import { Icons, ProfilePhoto } from "../..";
import { TfiSearch } from "react-icons/tfi";
import { PiChatTextThin, PiHouseSimpleThin } from "react-icons/pi";
import { PiNotificationThin } from "react-icons/pi";
import ava from "../../../assets/tony.jpg";

const MobileFooter = () => {
  return (
    <div className="w-full fixed bottom-0 h-[56px] bg-[#fcfcfc] flex justify-center items-center border-t-[1px] border-t-slate-300">
      <div className="w-[86%] h-[52%] flex items-center justify-between text-[18px]">
        <Icons size="21px" icon={<PiHouseSimpleThin />} color="" />
        <Icons size="21px" icon={<TfiSearch />} color="" />
        <Icons size="21px" icon={<PiChatTextThin />} color="" />
        <Icons size="21px" icon={<PiNotificationThin />} color="" />
        <ProfilePhoto size="" avatar={ava} />
      </div>
    </div>
  );
};

export default MobileFooter;

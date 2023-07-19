// This component is for the more options of the user home page.

import { LiaLeafSolid } from "react-icons/lia";
import { HiOutlinePhoto } from "react-icons/hi2";
import { GoVideo } from "react-icons/go";
import { TextAndIcon } from ".";

const More = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <TextAndIcon
            backgroundColor="#e4410f"
            iconColor="white"
            size="13px"
            text="Videos"
            icon={<GoVideo />}
          />
          <TextAndIcon
            backgroundColor="#e4410f"
            iconColor="white"
            size="13px"
            text="Photos"
            icon={<HiOutlinePhoto />}
          />
        </div>
      </div>
      <TextAndIcon
        backgroundColor="#e4410f"
        iconColor="white"
        size="23px"
        text="Yan"
        icon={<LiaLeafSolid />}
      />
    </div>
  );
};

export default More;

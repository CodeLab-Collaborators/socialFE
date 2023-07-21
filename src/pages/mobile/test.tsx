import { useState } from "react";
import HomePage from "../../components/mobile/homePage";
import Navs from "../../components/mobile/navs";
import Icons from "../../components/mobile/reusables/icons";
import { SlCloudUpload } from "react-icons/sl";
import { AiOutlinePlus } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { PiVideoThin } from "react-icons/pi";

const Test = () => {
  const [show, setShow] = useState<boolean>(false);
  const active = () => {
    setShow(true);
  };
  const inActive = () => {
    setShow(false);
  };
  return (
    <div onMouseDown={inActive} className="w-screen min-h-screen bg-white">
      <div className="border-b-[1px] border-b-slate-300 py-3 pl-4">Logo</div>
      <HomePage />
      <Navs />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          bottom: "0",
          backgroundColor: show ? "#000000c5" : "",
        }}>
        {show ? (
          <div className="w-fit h-fit flex flex-col gap-2 items-center mr-5 mb-16">
            <div className="flex text-white text-xs items-center gap-2">
              <div>Video</div>
              <div className="rounded-full text-white p-[11px] bg-red-400">
                <Icons sizeInPexels="16px" icon={<PiVideoThin />} />
              </div>
            </div>
            <div className="flex text-white text-xs items-center gap-2">
              <div>Image</div>
              <div className="rounded-full text-white p-[11px] bg-red-400">
                <Icons sizeInPexels="16px" icon={<CiImageOn />} />
              </div>
            </div>
            <div className="flex text-white items-center gap-3">
              <div>Post</div>
              <div className="rounded-full text-white p-[15px] bg-red-400">
                <Icons sizeInPexels="20px" icon={<SlCloudUpload />} />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-fit h-fit mr-5 mb-16">
            <div
              onClick={active}
              className="rounded-full text-white p-[15px] bg-red-400">
              <Icons sizeInPexels="20px" icon={<AiOutlinePlus />} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;

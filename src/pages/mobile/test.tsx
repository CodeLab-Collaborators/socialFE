import { useState } from "react";
import HomePage from "../../components/mobile/homePage";
import Navs from "../../components/mobile/navs";
import Icons from "../../components/mobile/reusables/icons";
import { SlCloudUpload } from "react-icons/sl";
import { AiOutlinePlus } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { PiVideoThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const Test = () => {
  const [show, setShow] = useState<boolean>(false);
  const active = () => {
    setShow(true);
  };
  const inActive = () => {
    setShow(false);
  };
  return (
    <div className="w-screen min-h-screen bg-white">
      <div className="border-b-[1px] border-b-slate-300 py-3 pl-4">Logo</div>
      <HomePage />
      <div className="w-fit h-fit mr-4 mb-16 fixed right-0 bottom-0">
        <div
          onClick={active}
          style={{ display: show ? "none" : "flex" }}
          className="rounded-full text-white p-[15px] bg-red-400">
          <Icons sizeInPexels="24px" icon={<AiOutlinePlus />} />
        </div>
      </div>
      <div
        onClick={inActive}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          display: show ? "flex" : "none",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          bottom: "0",
          backgroundColor: "#000000c5",
        }}>
        {show ? (
          <div className="w-fit h-fit flex flex-col gap-4 items-center mr-4 mb-16">
            <div className="flex text-white text-xs items-center gap-2">
              <div>Video</div>
              <div className="rounded-full text-white p-[8px] bg-red-400">
                <Icons sizeInPexels="24px" icon={<PiVideoThin />} />
              </div>
            </div>
            <div className="flex text-white text-xs items-center gap-2">
              <div>Image</div>
              <div className="rounded-full text-white p-[8px] bg-red-400">
                <Icons sizeInPexels="24px" icon={<CiImageOn />} />
              </div>
            </div>
            <Link to="/new-yan">
              <div
                onClick={inActive}
                className="flex text-white items-center gap-3">
                <div>Post</div>
                <div className="rounded-full text-white p-[15px] bg-red-400">
                  <Icons sizeInPexels="24px" icon={<SlCloudUpload />} />
                </div>
              </div>
            </Link>
          </div>
        ) : null}
      </div>
      <Navs />
    </div>
  );
};

export default Test;

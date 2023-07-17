// This component handles the more options which display over the user home page

import { LiaPlusSolid } from "react-icons/lia";
import { useState } from "react";
import { More } from ".";

const DisplayOver = () => {
  const [show, setShow] = useState<boolean>(false);
  const comeIn = () => {
    setShow(true);
  };
  const goOut = () => {
    setShow(false);
  };
  return (
    <div
      onMouseDown={goOut}
      className={`fixed top-0 w-full z-10 h-full ${
        show ? "bg-[#111111ae]" : ""
      }`}>
      <div className="absolute bottom-20 flex flex-col items-end right-4 h-fit w-fit">
        <div>
          {show ? (
            <More />
          ) : (
            <div
              onClick={comeIn}
              className="bg-cyan-600 flex items-center justify-center text-xl text-white w-[50px] h-[50px] rounded-[50%]">
              <LiaPlusSolid />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayOver;

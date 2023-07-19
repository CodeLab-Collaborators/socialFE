import ForgetPassHeader from "../../../components/mobile/sectionHeaders/ForgetPass";
import { PiLockSimpleThin } from "react-icons/pi";
import Input from "../../../reusables/input";
import Globalbutton from "../../../reusables/globalbutton";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="">
      {/* Header */}
      <ForgetPassHeader />

      {/* container */}
      <div className="w-full  grid place-items-center mt-10">
        <div className="w-[80%] min-h-[80vh] border rounded-sm  py-7 px-3 flex justify-center items-center flex-col max-sm:w-full relative">
          {/* icon */}
          <div className="rounded-full  border-gray-700 px-3 py-3 border-2">
            <p className="text-6xl font-thin">
              <PiLockSimpleThin />
            </p>
          </div>
          <h4 className="my-2 font-semibold text-gray-600">
            Trouble loggin in?
          </h4>

          <p className="w-[70%] text-center text-[12px] text-gray-400 mb-8">
            Enter your email or username and we'll send you a link to get back
            to your account.
          </p>

          {/* input and button */}
          <div className="w-[70%] flex flex-col gap-2">
            <Input
              inputType="text"
              placeholder="email or username"
              labelName="Email or Username"
              characterLength={22}
              onchange={() => {}}
            />
            <Globalbutton
              buttonType="submit"
              title="Send login link"
              width="full"
            />
          </div>

          {/* or Create account */}
          <div className="relative mt-8 flex flex-col w-[70%] m-auto">
            <hr className="my-5" />
            <p className="bg-white p-1 px-4 text-sm font-medium w-fit absolute top-[5px] right-[42%] text-gray-500">
              OR
            </p>

            <button className="text-[13px]  text-gray-600 font-semibold mt-2">
              <Link to="/register">Create new account</Link>
            </button>
          </div>
        </div>

        {/* back to login */}

        <div className=" border-b bottom-0 w-full py-3 mb-10 text-center text-[12px] font-semibold bg-[#FAFAFA] ">
          Back to login
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

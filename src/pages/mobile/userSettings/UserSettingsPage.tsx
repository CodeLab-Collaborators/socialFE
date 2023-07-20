import { AiOutlineArrowLeft } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

const UserSettingsPage = () => {
  return (
    <div>
      <div className="w-full h-screen bg-red-400 flex items-center justify-center">
        <div className="w-[90%] h-[90%] bg-blue-900">
          <div className="flex text-white items-center justify-between w-[50%]">
            <div className="text-white text-2xl">
              <AiOutlineArrowLeft />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl">Settings</h2>
              <p className="font-light">@DevSylvia</p>
            </div>
          </div>
          <hr />
          <div className="mt-2 w-full">
            <input
              className="w-full h-10 rounded-2xl"
              type="search"
              name=""
              id=""
              placeholder="Search Settings"
            />
          </div>
          <div className="flex w-full bg-orange-500 items-center justify-between py-3">
            <div className="w-[10%]">
              <VscAccount />
            </div>
            <div className="w-[80%]">
              <h3>Your account</h3>
              <p>
                See information about your account, download an archive of your
                data or learn about your account deactivation options
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;

import { AiOutlineArrowLeft } from "react-icons/ai";

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
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;

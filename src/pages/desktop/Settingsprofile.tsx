import LeftSidebar from "../../components/static/LeftSidebar";
import Accountcenter from "./Accountcenter";
import Accounteditcenter from "./Accounteditcenter";
import Edit_profile from "./Edit_profile";

const Settingsprofile = () => {
  return (
    <div className="flex w-[100%]">
      <LeftSidebar />
      {/* profile editting settings */}
      <div className="w-[100%] justify-end flex">
        <main
          className="bg-white column justify-center items-center pt-[40px] pl-[20px] pb-[50px]"
          style={{ width: "calc(100% - 18%)" }}>
          <h3 className="text-[23px]">Settings</h3>
          <div className="w-[100%] h-[100%] flex justify-center items-center">
            <div className="w-[90%] h-[100vh] border-[#DBDBDB] border rounded-md flex">
              <div className="w-[25%] column border-[#DBDBDB] border-r p-[18px]">
                <Accountcenter />
                <Accounteditcenter />
              </div>
              <div className="w-[75%] h-[100%] pt-[20px] pl-[40px]">
                <Edit_profile />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settingsprofile;

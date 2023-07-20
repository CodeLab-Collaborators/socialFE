import {
  AiOutlineArrowLeft,
  AiFillEye,
  AiOutlineSafety,
  AiFillTwitterSquare,
} from "react-icons/ai";
import SettingsProps from "./SettingsProps";
import { VscAccount } from "react-icons/vsc";
import { GrSecure, GrNotification } from "react-icons/gr";
import { FaMoneyBills } from "react-icons/fa6";
import { BiUniversalAccess } from "react-icons/bi";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

const UserSettingsPage = () => {
  return (
    <div>
      <div className="w-full py-5 bg-blue-900 flex items-center justify-center">
        <div className="w-[90%] h-[90%] ">
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

          <SettingsProps
            settingsDetails="See information about your account, download an archive of your data
            or learn about your account deactivation options"
            settingsIcon={<VscAccount />}
            settingsTittle="Your Account"
          />

          <SettingsProps
            settingsDetails="Manage your account`s security and keep track of your account`s usage including apps that you have connected to your account"
            settingsIcon={<GrSecure />}
            settingsTittle="Security and account access"
          />
          <SettingsProps
            settingsDetails="Manage your subscription`s features including Undo Tweet timing"
            settingsIcon={<AiFillTwitterSquare />}
            settingsTittle="Twitter Blue"
          />
          <SettingsProps
            settingsDetails="See how you can make money on twitter and manage your monetisation options"
            settingsIcon={<FaMoneyBills />}
            settingsTittle="Monetisation"
          />
          <SettingsProps
            settingsDetails="Manage what information you see and share on twitter"
            settingsIcon={<AiOutlineSafety />}
            settingsTittle="Privacy and safety"
          />
          <SettingsProps
            settingsDetails="Select the kinds of notification you get about your activities, interests and reccomendations"
            settingsIcon={<GrNotification />}
            settingsTittle="Notifications"
          />
          <SettingsProps
            settingsDetails="Manage how Twitter content is displayed to you"
            settingsIcon={<BiUniversalAccess />}
            settingsTittle="Accessibilty, display and languages"
          />
          <SettingsProps
            settingsDetails="Check out other places for helpful information to learn more about twitter products and services"
            settingsIcon={<HiOutlineDotsCircleHorizontal />}
            settingsTittle="Additional resources"
          />
          <SettingsProps
            settingsDetails=""
            settingsIcon={<AiFillEye />}
            settingsTittle="Proxy"
          />
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;

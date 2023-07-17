import { SlArrowDown } from "react-icons/sl";
import { MdFiberManualRecord } from "react-icons/md";
import profile from "../../../assets/round-mum.jpg";
import { CiFacebook } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiPlusSquare } from "react-icons/fi";
import { TbBrandAirbnb } from "react-icons/tb";

const UserProfilePage = () => {
  return (
    <div>
      <div className="w-full py-5  flex justify-center items-center">
        <div className="w-[90%] h-[90%] flex flex-col items-center">
          <div className="w-full h-[50px] flex items-center justify-between">
            <div className="w-[32%] h-[90%]  flex items-center justify-between">
              <h3 className="font-bold">DevSylvie</h3>
              <h3 className="font-bold">
                <SlArrowDown />
              </h3>
              <h3 className="text-red-500">
                <MdFiberManualRecord />
              </h3>
            </div>
            <div className="w-[50%] h-[90%]  flex items-center justify-between font-bold text-3xl">
              <div>
                <TbBrandAirbnb />
              </div>
              <div>
                <FiPlusSquare />
              </div>
              <div>
                <GiHamburgerMenu />
              </div>
            </div>
          </div>

          <div className="w-full py-2 flex items-center justify-between">
            <div className="w-[30%] flex items-center justify-between">
              <div className="w-[100px] overflow-hidden h-[100px] rounded-full">
                <img
                  src={profile}
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[60%]  font-bold  flex items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <div>10</div>
                <div>Posts</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div>271</div>
                <div>Followers</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div>165</div>
                <div>Following</div>
              </div>
            </div>
          </div>
          <div className="w-full py-3 flex flex-col">
            <h3 className="font-semibold">Sylvia Adimike</h3>
            <p>Science, Technology & Engineering</p>
            <h3 className="font-semibold py-1">
              Today is tough, tomorrow will be tougher, Just don't give up
            </h3>
            <h3 className="font-semibold">Baller & Software Engineer</h3>
            <h3 className="font-semibold text-blue-700 flex items-center py-1">
              <p className="text-3xl">
                <CiFacebook />
              </p>{" "}
              &nbsp; Facebook Profile
            </h3>
          </div>
          <div className="w-full py-5 mb-3 bg-gray-300 rounded-2xl flex justify-center items-center">
            <div>
              <h3 className="font-bold">Professional Dashboard</h3>
              <p>200 accounts reached in the last 2 months</p>
            </div>
          </div>
          <div className="flex font-semibold w-full justify-between items-center mt-3 mb-1">
            <div className="w-[30%] h-[50px] rounded-xl bg-gray-300 flex items-center justify-center">
              Edit Profile
            </div>
            <div className="w-[30%] h-[50px] rounded-xl bg-gray-300 flex items-center justify-center">
              Share Profile
            </div>
            <div className="w-[30%] h-[50px] rounded-xl bg-gray-300 flex items-center justify-center">
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;

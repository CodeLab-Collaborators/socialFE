import { SlArrowDown } from "react-icons/sl";
import { MdFiberManualRecord } from "react-icons/md";

const UserProfilePage = () => {
  return (
    <div>
      <div className="w-full h-screen bg-green-500 flex justify-center items-center">
        <div className="w-[90%] h-[90%] bg-red-400 flex flex-col items-center">
          <div className="w-full h-[50px] bg-blue-300 flex items-center justify-between">
            <div className="w-[32%] h-[90%] bg-yellow-300 flex items-center justify-between">
              <h3 className="font-bold">DevSylvie</h3>
              <h3 className="font-bold">
                <SlArrowDown />
              </h3>
              <h3 className="text-red-500">
                <MdFiberManualRecord />
              </h3>
            </div>
            <div className="w-[50%] h-[90%] bg-yellow-300">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="w-full h-[150px] bg-brown-300 flex items-center justify-between">
            <div className="w-[32%] h-[90%] bg-yellow-300 flex items-center justify-between"></div>
            <div className="w-[50%] h-[90%] bg-yellow-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;

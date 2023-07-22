import { AiOutlineClose } from "react-icons/ai";
import { GrCheckmark } from "react-icons/gr";
import { TbMoodBoy } from "react-icons/tb";

const UserUpdatePage = () => {
  return (
    <div className="w-[100%] py-5 flex items-center justify-center">
      <div className="w-[90%] h-[90%]">
        <div className="flex w-[100%] items-center justify-between">
          <div className="flex">
            <div className="text-[25px]">
              <AiOutlineClose />
            </div>
            <h3 className="ml-[17px]">Edit profile</h3>
          </div>

          <div className="text-[blue] text-[22px]">
            <GrCheckmark />
          </div>
        </div>

        <div className="w-[100%] column  items-center justify-center mt-[40px]">
          <div className="flex w-[100%] justify-center items-center">
            <img
              src=""
              className="w-[65px] h-[65px] rounded-full bg-gray-300"
            />
            <div className="flex w-[65px] h-[65px] rounded-full bg-gray-100 justify-center items-center text-[20px] ml-[10px] cursor-pointer">
              <TbMoodBoy />
            </div>
          </div>

          <h3 className="w-[100%] flex justify-center items-center mt-[15px] text-[blue]">
            Edit picture or avatar
          </h3>
        </div>
        <div className="w-[100%] h-[400px] ">
          <div className="w-[100%] column mt-[10px]">
            <h6>Name</h6>
            <input
              placeholder="Input Your Name"
              className="w-[100%] h-[25px] border-b-[2px]"
            />
          </div>
          <div className="w-[100%] column mt-[10px]">
            <h6>UserName</h6>
            <input
              placeholder="Input Your UserName"
              className="w-[100%] h-[25px] border-b-[2px]"
            />
          </div>
          <div className="w-[100%] column mt-[10px]">
            <h6>Pronouns</h6>
            <input className="w-[100%] h-[25px] border-b-[2px]" />
          </div>
          <div className="w-[100%] column mt-[10px]">
            <h6>Bio</h6>
            <input className="w-[100%] h-[25px] border-b-[2px]" />
          </div>
          <div className="w-[100%] column mt-[10px]">
            <h6>Gender</h6>
            <input
              placeholder="Male"
              className="w-[100%] h-[25px] border-b-[2px]"
            />
          </div>
          <div className="w-[100%] column mt-[10px]">
            <h6>Show Threads Shortcut</h6>
            <input className="w-[100%] h-[25px] border-b-[2px]" />
          </div>
          <div className="w-[100%] column mt-[10px]">
            <h6>Public business Information</h6>
          </div>
          <div className="w-[100%] column mt-[10px]">
            <h6>Page</h6>
          </div>
          <div className="w-[100%] column mt-[10px]">
            <h6>Category</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdatePage;

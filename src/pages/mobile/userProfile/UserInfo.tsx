import { Link } from "react-router-dom";
import cover from "../../../assets/9.jpeg";

const UserInfo = () => {
  //   const initials =
  //     user?.fullName.charAt(0).toUpperCase() +
  //     user?.fullName.split(" ").pop().charAt(0).toUpperCase();

  //   console.log(`this is initials`, initials);

  //   console.log(`this is user`, validatedUser);

  return (
    <div
      className="relative h-[20vh] bg-orange-300 w-full"
      style={{ backgroundImage: `url(${cover})` }}
    >
      {/* cover image */}
      <div className="absolute bottom-[-85px] left-4 w-[92%] h-full flex gap-3 justify-between items-center ">
        <div className="w-[60%] h-full ">
          {/* profile pic */}
          <div className="w-[90px] h-[90px] bg-orange-500 border-[4px] border-white rounded-full">
            <img src="" alt="dp" />
          </div>
          {/* display name */}
          <p className=" pt-1 text-[19px] font-bold ">Louis Etor</p>
          {/* username */}
          <span className="lowercase text-gray-500 text-[13px]">
            @louisetor
          </span>
        </div>
        <div className="w-full h-full  flex items-center justify-end">
          <Link to="/profile-page/account-update">
            <button
              type="submit"
              className="mt-4 py-2 text-xs rounded-full px-3 border border-gray-500 font-medium"
            >
              Edit profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

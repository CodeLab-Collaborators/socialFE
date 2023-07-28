import { IoArrowBack } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full text-orange-500 px-4 sticky top-0 py-3 flex justify-between bg-transparent z-10">
      <p
        className="text-lg cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoArrowBack />
      </p>

      <Link to="/user-settings">
        <p className="text-lg">
          <LuSettings2 />
        </p>
      </Link>
    </div>
  );
};

export default ProfileHeader;

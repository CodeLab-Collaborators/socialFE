import { IoArrowBack } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 py-3 flex justify-between bg-transparent relative z-10">
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

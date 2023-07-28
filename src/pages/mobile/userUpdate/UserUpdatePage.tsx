import { useState } from "react";
import cover from "../../../assets/9.jpeg";
import { IoArrowBack } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsCameraFill } from "react-icons/bs";

const UserUpdatePage = () => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.viewUserDetails);

  const [coverImage, setCoverImage] = useState("");
  const [ProfileImage, setProfileImage] = useState("");

  const handleCoverImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      // Convert the selected image to a URL
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  const handleProfileImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      // Convert the selected image to a URL
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="h-full">
      <div className="w-full px-4 py-3 border-b sticky top-0 flex justify-between bg-transparent z-10">
        <p
          className="text-lg cursor-pointer text-orange-500"
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoArrowBack />
        </p>

        <p className="text-xs font-semibold text-orange-500">Save</p>
      </div>
      {/* cover image */}
      <div
        className="relative h-[23vh] w-full"
        style={
          coverImage === ""
            ? {
                backgroundImage: `url(${cover})`,
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }
            : {
                backgroundImage: `url(${coverImage})`,
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }
        }
      >
        {/* Black overlay for the cover image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text at the middle of the cover image */}
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
          <label htmlFor="coverImageInput" className="absolute text-white">
            <p className="text-3xl cursor-pointer">
              <BsCameraFill />
            </p>
          </label>
          <input
            type="file"
            id="coverImageInput"
            style={{ display: "none" }}
            onChange={handleCoverImageChange}
          />
        </div>

        {/* profile image holder */}
        <div className="absolute inset-[120px] left-4 w-[92%] h-full">
          {/* Black overlay for the profile pic */}
          <div className="relative w-[90px] h-[90px] bg-[#000000] z-10 rounded-full">
            {/* profile pic */}
            <div className="absolute top-0 left-0 w-[90px] h-[90px] flex items-center justify-center bg-orange-500 border-[4px] border-white rounded-full">
              <img src="" alt={user?.userName} />
            </div>
          </div>
        </div>
      </div>

      <form action="" method="post" className="mt-16 px-4 flex flex-col gap-7">
        <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-orange-300 focus-within:border-b-2">
          <input
            type="text"
            placeholder="full name"
            defaultValue={user.fullName}
            className="peer text-[12.5px] h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-1 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Full name
          </span>
        </label>

        <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-orange-300 focus-within:border-b-2">
          <input
            type="text"
            placeholder="username"
            defaultValue={user.userName}
            className="peer text-[12.5px] h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Username
          </span>
        </label>

        <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-orange-300 focus-within:border-b-2">
          <input
            type="email"
            placeholder="Email"
            defaultValue={user.email}
            className="peer text-[12.5px] h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Email
          </span>
        </label>

        <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-orange-300 focus-within:border-b-2">
          <input
            type="text"
            placeholder="bio"
            defaultValue={user.bio}
            className="peer text-[12.5px] h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Bio
          </span>
        </label>

        <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-orange-300 focus-within:border-b-2">
          <input
            type="text"
            placeholder="link"
            defaultValue={user.link}
            className="peer text-[12.5px] h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:2/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            link
          </span>
        </label>
      </form>
      {/* cover image overlay */}
    </div>
  );
};

export default UserUpdatePage;

import { BiLinkAlt } from "react-icons/bi";
import { useSelector } from "react-redux";

const UserBio = () => {
  const user = useSelector((state: any) => state.viewUserDetails);

  // console.log(`this is user`, user);

  return (
    <div className="mt-[100px] w-full text-[13px] flex flex-col  px-4">
      <p>{user.bio}</p>
      <span className="my-3 font-medium flex gap-3 items-center">
        <div className="flex items-center justify-center gap-2">
          <BiLinkAlt />
          <a href="#" className="text-orange-500">
            your link
          </a>
        </div>
        <h3 className="text-gray-400">| 18 followers</h3>
      </span>
    </div>
  );
};

export default UserBio;

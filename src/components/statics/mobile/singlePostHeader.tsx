import { FiArrowLeft } from "react-icons/fi";

const SinglePostHeader = () => {
  return (
    <div className="h-16 w-full text-black flex items-center">
      <div className="w-[20%] text-xl flex items-center pl-4">
        <FiArrowLeft />
      </div>
      <div className="flex-1">Yet</div>
    </div>
  );
};

export default SinglePostHeader;

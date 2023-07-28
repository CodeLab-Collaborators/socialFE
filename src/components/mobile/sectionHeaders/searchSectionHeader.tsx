import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Icons from "../reusables/icons";

const SearchSectionHeader = () => {
  const navigate = useNavigate();
  const toPreviousPage = () => {
    navigate(-1);
  };
  return (
    <div className="py-5 pl-5 border-b-[1px] border-b-slate-200 flex items-center">
      <div onClick={toPreviousPage} className="w-fit h-fit">
        <Icons sizeInPexels="20px" icon={<FiArrowLeft />} />
      </div>
      <input
        autoFocus
        placeholder="Search Yet"
        className="placeholder:font-light bg-transparent ml-10 focus:outline-none text-[13px] placeholder:text-sm text-blue-400"
      />
    </div>
  );
};

export default SearchSectionHeader;

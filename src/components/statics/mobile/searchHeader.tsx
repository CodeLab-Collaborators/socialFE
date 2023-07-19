import { FiArrowLeft } from "react-icons/fi";

const SearchHeader = () => {
  return (
    <div className="h-16 w-full flex items-center border-b-slate-700 border-b-[1px] text-white">
      <div className="w-[28%] text-xl flex items-center pl-6">
        <FiArrowLeft />
      </div>
      <div className="flex-1">
        <input
          autoFocus
          placeholder="Search Yet"
          className="w-full text-sm text-blue-500 placeholder:text-slate-400 placeholder:font-light bg-transparent focus:outline-none border-none"
        />
      </div>
    </div>
  );
};

export default SearchHeader;

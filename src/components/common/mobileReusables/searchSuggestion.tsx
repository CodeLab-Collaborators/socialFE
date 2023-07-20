import { GoArrowUpLeft } from "react-icons/go";
import { iSuggest } from "../../../types";

const SearchSuggestion: React.FC<iSuggest> = ({ suggestion }) => {
  return (
    <div className="w-full text-white flex justify-between items-center">
      <>{suggestion}</>
      <div className="text-gray-500 text-xl">
        <GoArrowUpLeft />
      </div>
    </div>
  );
};

export default SearchSuggestion;

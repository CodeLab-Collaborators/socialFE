import { Recents, SearchHeader, SearchSuggestion } from "../../components";
import { MdCancel } from "react-icons/md";
import ava from "../../assets/tony.jpg";

const SearchPage = () => {
  return (
    <div className="w-screen h-screen bg-slate-800">
      <SearchHeader />
      <div className="px-6 py-3 flex flex-col gap-4">
        <div className="flex text-lg items-center text-slate-400 justify-between">
          <>Recent</>
          <div>
            <MdCancel />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Recents name="Tony Stark" userName="@tonystark" avatar={ava} />
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-5 text-xs px-6">
        <SearchSuggestion suggestion="Wizkid" />
      </div>
    </div>
  );
};

export default SearchPage;

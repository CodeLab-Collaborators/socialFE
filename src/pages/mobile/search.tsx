import Icons from "../../components/mobile/reusables/icons";
import { HiArrowUpLeft } from "react-icons/hi2";
import RecentSearches from "../../components/mobile/recentSearches";
import SearchSectionHeader from "../../components/mobile/sectionHeaders/searchSectionHeader";

const Search = () => {
  return (
    <div className="w-full min-h-screen">
      <SearchSectionHeader />
      <div className="w-full py-9 flex justify-center">
        <div className="w-[86%] flex flex-col gap-10">
          <RecentSearches />
          <div className="flex justify-between text-sm items-center">
            <div>Wizkid</div>
            <div className="text-[gray]">
              <Icons sizeInPexels="20px" icon={<HiArrowUpLeft />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

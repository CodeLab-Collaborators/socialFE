import { Link, useNavigate } from "react-router-dom";
import Icons from "../../components/mobile/reusables/icons";
import { FiArrowLeft } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import ProfilePhotos from "../../components/mobile/reusables/profilePhotos";
import ave from "../../assets/tony.jpg";
import Name from "../../components/mobile/reusables/name";
import { HiArrowUpLeft } from "react-icons/hi2";

const Search = () => {
  const navigate = useNavigate();
  const toPreviousPage = () => {
    navigate(-1);
  };
  return (
    <div className="w-full text-[#dfdfdf] min-h-screen bg-[#1c2739]">
      <div className="py-5 pl-5 border-b-[1px] border-b-slate-700 flex items-center">
        <div onClick={toPreviousPage} className="w-fit h-fit">
          <Icons sizeInPexels="20px" icon={<FiArrowLeft />} />
        </div>
        <input
          autoFocus
          placeholder="Search Yet"
          className="placeholder:font-light bg-transparent ml-10 focus:outline-none text-[13px] placeholder:text-sm text-blue-400"
        />
      </div>
      <div className="w-full py-9 flex justify-center">
        <div className="w-[86%] flex flex-col gap-10">
          <div className="flex justify-between text-lg items-center text-slate-400">
            <div>Recent</div>
            <Icons sizeInPexels="20px" icon={<MdCancel />} />
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-fit flex flex-col items-center gap-2">
              <ProfilePhotos sizeInPexels="35px" photo={ave} />
              <div className="flex flex-col items-center">
                <Name name="Robert Downey Junior" color="#0b6dcf" />
                <div className="text-[10px] text-[#9a9a9a]">
                  <Link to="/profile-page">@robertdowneyjunior</Link>
                </div>
              </div>
            </div>
          </div>
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

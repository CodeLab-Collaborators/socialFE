import { MdCancel } from "react-icons/md";
import ave from "../../assets/tony.jpg";
import { Link } from "react-router-dom";
import Icons from "./reusables/icons";
import Name from "./reusables/name";
import ProfilePhotos from "./reusables/profilePhotos";

const RecentSearches = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between text-lg items-center text-slate-600">
        <div>Recent</div>
        <Icons sizeInPexels="20px" icon={<MdCancel />} />
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="w-fit flex flex-col items-center gap-2">
          <ProfilePhotos sizeInPexels="35px" photo={ave} />
          <div className="flex flex-col items-center">
            <Name name="Robert Downs" color="#0b6dcf" />
            <div className="text-[10px] text-[#9a9a9a]">
              <Link to="/profile-page">@robertdowns</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSearches;

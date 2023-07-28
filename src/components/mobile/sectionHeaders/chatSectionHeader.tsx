import ProfilePhotos from "../reusables/profilePhotos";
import ava from "../../../assets/tony.jpg";
import { CiSettings } from "react-icons/ci";

type searchValue = {
  input: any;
};

const ChatSectionHeader: React.FC<searchValue> = ({ input }) => {
  return (
    <div className="w-full py-3 flex justify-center items-center border-b-[1px] border-b-slate-200">
      <div className="w-[90%] flex justify-between items-center">
        <ProfilePhotos sizeInPexels="30px" photo={ava} />
        {input}
        <div className="text-[22px]">
          <CiSettings />
        </div>
      </div>
    </div>
  );
};

export default ChatSectionHeader;

import { useParams } from "react-router-dom";
import ProfilePhotos from "../../components/mobile/reusables/profilePhotos";
import { SlOptions } from "react-icons/sl";
import ave from "../../assets/tony.jpg";
import Name from "../../components/mobile/reusables/name";
import Icons from "../../components/mobile/reusables/icons";
import { PiChatCircleLight } from "react-icons/pi";
import { LiaRetweetSolid } from "react-icons/lia";
import { BsDot } from "react-icons/bs";
import { PiShareFatThin } from "react-icons/pi";
import { dummyPosts } from "./dummy/data/posts";
import ImageComponent from "../../components/mobile/image";
import Comments from "../../components/mobile/comments";
import SectionHeader from "../../components/mobile/sectionHeaders/sectionHeader";

const ViewPosts = () => {
  const { id } = useParams();
  const data = dummyPosts.find((el) => el.id === id);
  return (
    <div className="w-full pb-12 min-h-screen bg-white">
      <div className="pl-5 py-4">
        <SectionHeader headerTitle="Yet" />
      </div>
      <div className="w-full mt-4 flex flex-col items-center">
        <div className="w-[88%]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ProfilePhotos
                sizeInPexels="30px"
                photo={data?.user.profilePicture}
              />
              <Name color="#066fd8" name={data?.user.name!} />
            </div>
            <div className="text-xs flex items-center gap-5">
              <div className="text-[grey]">{data?.time}</div>
              <SlOptions />
            </div>
          </div>
          <div className="text-[11px] font-normal mt-3">{data?.message}</div>
        </div>
        <div className="flex mt-3 gap-[6px] overflow-x-scroll no-scrollbar">
          {data?.pictures.map((el) => (
            <ImageComponent image={el} />
          ))}
        </div>
        <div className="w-full py-3 border-b-[1px] border-b-slate-200 flex flex-col items-center">
          <div className="w-[88%] flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <label className="w-fit h-fit" htmlFor="comment">
                <Icons sizeInPexels="20px" icon={<PiChatCircleLight />} />
              </label>
              <Icons sizeInPexels="20px" icon={<LiaRetweetSolid />} />
              <Icons sizeInPexels="20px" icon={<PiShareFatThin />} />
            </div>
            <div className="text-[11px] text-gray-600 flex gap-1 items-center">
              <div>{data?.replies} replies</div>
              <BsDot />
              <div>{data?.views} views</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          {data?.comments!.map((el) => (
            <Comments
              profilePhoto={el.profilePicture}
              name={el.name}
              time={el.time}
              comment={el.comment}
              replies={`${el.replies}`}
              views={`${el.views}`}
            />
          ))}
        </div>
      </div>
      <div className="fixed w-full bottom-0 py-[6px] flex justify-center items-center">
        <div className="w-[92%] p-1 bg-slate-200 rounded-3xl flex gap-4">
          <ProfilePhotos sizeInPexels="25px" photo={ave} />
          <input
            id="comment"
            className="placeholder:text-[#8d8d8d] w-full pr-3 placeholder:text-xs text-xs bg-transparent focus:outline-none"
            placeholder="Reply to Pepper Potts"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewPosts;

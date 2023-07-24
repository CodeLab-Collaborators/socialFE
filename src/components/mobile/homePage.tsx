import ProfilePhotos from "./reusables/profilePhotos";
import Name from "./reusables/name";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import Icons from "./reusables/icons";
import { TfiComment } from "react-icons/tfi";
import { AiOutlineRetweet } from "react-icons/ai";
import { HiOutlineEye } from "react-icons/hi";
import { PiShareFatThin } from "react-icons/pi";
import { dummyPosts } from "../../pages/mobile/dummy/data/posts";

const HomePage = () => {
  return (
    <div className="w-full py-5 pb-16 flex justify-center">
      <div className="w-[90%] flex flex-col gap-9">
        {dummyPosts.map((el) => (
          <div className="w-full flex gap-[5%]">
            <div className="w-fit">
              <ProfilePhotos
                sizeInPexels="30px"
                photo={el.user.profilePicture}
              />
            </div>
            <div className="text-[11px] flex-1">
              <Link to={`/single-post/${el.id}`}>
                <div className="flex flex-wrap w-full text-gray-700 items-center gap-1">
                  <Name name={el.user.name} color="goldenrod" />
                  {el.user.userName}
                  <div>
                    <BsDot />
                  </div>
                  <div>{el.time}</div>
                </div>
                <div>{el.title}</div>
                <div className="w-full h-fit mt-3">
                  <img
                    className="w-full h-[200px] rounded-lg"
                    src={el.pictures[0]}
                    alt=""
                  />
                </div>
              </Link>
              <div className="w-full mt-4 flex justify-between">
                <div className="flex items-center gap-1">
                  <Icons sizeInPexels="13px" icon={<TfiComment />} />
                  <div className="text-[11px]">{el.replies}</div>
                </div>
                <div className="flex items-center gap-1">
                  <Icons sizeInPexels="13px" icon={<AiOutlineRetweet />} />
                  <div className="text-[11px]">{el.reposts}</div>
                </div>
                <div className="flex items-center gap-1">
                  <Icons sizeInPexels="13px" icon={<HiOutlineEye />} />
                  <div className="text-[11px]">{el.views}</div>
                </div>
                <Icons sizeInPexels="15px" icon={<PiShareFatThin />} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

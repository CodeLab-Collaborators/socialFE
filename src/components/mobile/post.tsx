import { IconAndText, Icons, PostHead, ProfilePhoto } from "..";
import { PiChatCircleLight } from "react-icons/pi";
import { LiaRetweetSolid } from "react-icons/lia";
import { AiOutlineEye } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { GoShareAndroid } from "react-icons/go";
import { iPosts } from "../../types";

const Post: React.FC<iPosts> = ({
  name,
  profilePhoto,
  time,
  title,
  postCover,
  comments,
  rePosts,
  views,
  reactions,
}) => {
  return (
    <div className="flex gap-2">
      <div className="w-fit">
        <ProfilePhoto avatar={profilePhoto} size="33px" />
      </div>
      <div className="flex-1">
        <PostHead name={name} time={time} title={title} />
        <div className="mt-2 flex justify-end">
          <div className="w-full">
            <div className=" rounded-2xl">
              <div className="w-full h-[180px]">
                <img
                  className="object-top w-full h-full rounded-2xl"
                  src={postCover}
                  alt="post image"
                />
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <IconAndText
                icon={<PiChatCircleLight />}
                text={`${comments}`}
                size="10px"
              />
              <IconAndText
                icon={<LiaRetweetSolid />}
                text={`${rePosts}`}
                size="10px"
              />
              <IconAndText
                icon={<AiOutlineEye />}
                text={`${views}`}
                size="10px"
              />
              <IconAndText
                icon={<BsBarChart />}
                text={`${reactions}`}
                size="10px"
              />
              <Icons icon={<GoShareAndroid />} size="12px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

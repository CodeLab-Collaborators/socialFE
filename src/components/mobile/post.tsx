import { IconAndText, Icons, PostHead } from "..";
import { PiChatCircleLight } from "react-icons/pi";
import { LiaRetweetSolid } from "react-icons/lia";
import { AiOutlineEye } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { GoShareAndroid } from "react-icons/go";
import ava2 from "../../assets/dum1.jpg";

const Post = () => {
  return (
    <div>
      <PostHead />
      <div className="mt-2 flex justify-end">
        <div className="w-[85%]">
          <div className=" rounded-2xl">
            <div className="w-full h-[180px]">
              <img
                className="object-top w-full h-full rounded-2xl"
                src={ava2}
                alt="post image"
              />
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <IconAndText
              icon={<PiChatCircleLight />}
              text={`${430}`}
              size="10px"
            />
            <IconAndText
              icon={<LiaRetweetSolid />}
              text={`${110}`}
              size="10px"
            />
            <IconAndText icon={<AiOutlineEye />} text={`${430}`} size="10px" />
            <IconAndText icon={<BsBarChart />} text={`${430}`} size="10px" />
            <Icons icon={<GoShareAndroid />} size="12px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

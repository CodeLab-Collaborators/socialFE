import {
  Comments,
  SinglePostHeader,
  SinglePostTexts,
  SinglePostTitle,
} from "../../components";
import ava from "../../assets/pep.webp";
import cover from "../../assets/ave.jpg";
import { PiChatCircleLight } from "react-icons/pi";
import { LiaRetweetSolid } from "react-icons/lia";
import { BsSend } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";

const SinglePost = () => {
  return (
    <div className="w-screen pb-12 min-h-screen bg-white">
      <SinglePostHeader />
      <SinglePostTitle avatar={ava} time="12h" name="Pepper Potts" />
      <SinglePostTexts
        message1="Lionel Messi was unveiled by Inter Miami to a sold-out crowd of around 20,000 fans 🏁🦄"
        message2="His former teammate Sergio Busquets was also unveiled, after signing a contract for the club until 2025 ✍😍"
      />
      <div className="flex gap-2 overflow-x-scroll no-scrollbar">
        <img src={cover} className="w-screen h-[300px] md:hidden object-top" />
      </div>
      <div className="flex gap-5 py-4 px-4 text-xl">
        <PiChatCircleLight />
        <LiaRetweetSolid />
        <BsSend />
      </div>
      <div className="text-gray-500 text-xs px-4 flex items-center gap-2">
        <div>67 replies</div>
        <div className="flex items-center text-[3px]">
          <BsFillCircleFill />
        </div>
        <div>1,040 likes</div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePost;

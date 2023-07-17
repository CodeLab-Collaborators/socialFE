import { Post } from "../../components";

const MobileHomeStart = () => {
  return (
    <div className="w-full flex justify-center py-2">
      <div className="w-11/12 flex flex-col mb-16 gap-7">
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MobileHomeStart;

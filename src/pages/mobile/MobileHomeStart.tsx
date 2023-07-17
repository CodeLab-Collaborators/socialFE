import { Post } from "../../components";
import tony from "../../assets/tony.jpg";

const MobileHomeStart = () => {
  return (
    <div className="w-full flex justify-center py-2">
      <div className="w-11/12 flex flex-col mb-16 gap-7">
        <Post
          name="Tony Stark"
          time="40mns"
          profilePhoto={tony}
          title="One year anniversary."
          postCover=""
          comments={255}
          rePosts={127}
          views={562}
          reactions={345}
        />
      </div>
    </div>
  );
};

export default MobileHomeStart;

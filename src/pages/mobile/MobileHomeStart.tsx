import { Post } from "../../components";
import tony from "../../assets/tony.jpg";
import ave from "../../assets/ave.jpg";
import pep from "../../assets/pep.webp";

const MobileHomeStart = () => {
  return (
    <div className="w-full flex justify-center py-2">
      <div className="w-11/12 flex flex-col mb-16 gap-7">
        <div>
          <Post
            name="Tony Stark"
            time="40mns"
            profilePhoto={tony}
            title="One year anniversary."
            postCover={ave}
            comments={255}
            rePosts={127}
            views={562}
            reactions={345}
          />
        </div>
        <Post
          name="Pepper Potts"
          time="41mns"
          profilePhoto={pep}
          title="One year anniversary."
          postCover={ave}
          comments={348}
          rePosts={326}
          views={787}
          reactions={566}
        />
      </div>
    </div>
  );
};

export default MobileHomeStart;

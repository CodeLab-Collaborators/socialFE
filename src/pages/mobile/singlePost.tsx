import { SinglePostHeader, SinglePostTitle } from "../../components";
import ava from "../../assets/pep.webp";

const SinglePost = () => {
  return (
    <div className="w-screen min-h-screen bg-white">
      <SinglePostHeader />
      <SinglePostTitle avatar={ava} time="12h" name="Pepper Potts" />
    </div>
  );
};

export default SinglePost;

import { Link } from "react-router-dom";

type iProfile = {
  photo: any;
  sizeInPexels: string;
};

const ProfilePhotos: React.FC<iProfile> = ({ photo, sizeInPexels }) => {
  return (
    <Link to="/user-profile">
      <div className="h-fit w-fit">
        <img
          src={photo}
          alt="profile"
          style={{
            height: sizeInPexels,
            width: sizeInPexels,
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>
    </Link>
  );
};

export default ProfilePhotos;

// This is a sort of global user profile picture component.
// Links from this component should be put in a container element holding this component

import { iProfile } from "../../../types";

const ProfilePhoto: React.FC<iProfile> = ({ size, avatar }) => {
  return (
    <div
      style={{
        height: `${size || "84%"}`,
        width: `${size || "24px"}`,
        borderRadius: "50%",
        color: "white",
      }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "top",
        }}
        src={avatar}
        alt="A"
      />
    </div>
  );
};

export default ProfilePhoto;

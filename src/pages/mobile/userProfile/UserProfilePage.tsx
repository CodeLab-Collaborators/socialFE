import ProfileHeader from "../../../components/mobile/sectionHeaders/ProfileHeader";
import ToggleSectionHeader from "./ToggleSectionHeader";
import UserBio from "./UserBio";
import UserInfo from "./UserInfo";

const UserProfilePage = () => {
  return (
    <div className="min-h-[94vh] max-h-full w-full">
      <ProfileHeader />
      <UserInfo />
      <UserBio />
      <ToggleSectionHeader />
    </div>
  );
};

export default UserProfilePage;

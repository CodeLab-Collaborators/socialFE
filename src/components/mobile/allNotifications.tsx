import NotificationsComponent from "./reusables/notificationsComponent";
import ava from "../../assets/tony.jpg";
const AllNotifications = () => {
  return (
    <div>
      <NotificationsComponent
        profilePhoto={ava}
        name="Tony Stark"
        about="Followed you"
        action
        actionTitle="Follow"
      />
      <NotificationsComponent
        profilePhoto={ava}
        name="Tony Stark"
        about="Followed you"
      />
    </div>
  );
};

export default AllNotifications;

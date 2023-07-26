import { useState } from "react";
import Category from "../../components/mobile/reusables/category";
import NotificationsComponent from "../../components/mobile/reusables/notificationsComponent";
import ava from "../../assets/tony.jpg";
const Notifications = () => {
  const [all, setAll] = useState<boolean>(false);
  const [replies, setReplies] = useState<boolean>(false);
  const [mentions, setMentions] = useState<boolean>(false);
  const [reposts, setReposts] = useState<boolean>(false);
  const activateAll = () => {
    setAll(true);
    setReplies(false);
    setMentions(false);
    setReposts(false);
  };
  const activateReplies = () => {
    setAll(false);
    setReplies(true);
    setMentions(false);
    setReposts(false);
  };
  const activateMentions = () => {
    setAll(false);
    setReplies(false);
    setMentions(true);
    setReposts(false);
  };

  const activateReposts = () => {
    setAll(false);
    setReplies(false);
    setMentions(false);
    setReposts(true);
  };
  return (
    <div className="w-full min-h-screen py-1 flex flex-col items-center gap-6">
      <div className="w-11/12 text-[21px]">Activity</div>
      <div className="w-full pl-4 overflow-x-scroll no-scrollbar flex items-center gap-2">
        <div onClick={activateAll}>
          <Category category="All" theme={all ? "dark" : ""} />
        </div>
        <div onClick={activateReplies}>
          <Category category="Replies" theme={replies ? "dark" : ""} />
        </div>
        <div onClick={activateMentions}>
          <Category category="Mentions" theme={mentions ? "dark" : ""} />
        </div>
        <div onClick={activateReposts}>
          <Category category="Re-Posts" theme={reposts ? "dark" : ""} />
        </div>
      </div>
      <div className="w-11/12 flex flex-col gap-6">
        <NotificationsComponent
          profilePhoto={ava}
          name="Tony Stark"
          about="Followed you"
          action="Follow"
        />
        <NotificationsComponent
          profilePhoto={ava}
          name="Tony Stark"
          about="Followed you"
          action="Follow"
        />
      </div>
    </div>
  );
};

export default Notifications;

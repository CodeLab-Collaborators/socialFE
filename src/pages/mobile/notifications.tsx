import { useState } from "react";
import Category from "../../components/mobile/reusables/category";
import AllNotifications from "../../components/mobile/allNotifications";
import RepliyNotifications from "../../components/mobile/repliyNotifications";
import MentionNotifications from "../../components/mobile/mentionNotifications";
import RepostNotifications from "../../components/mobile/repostNotifications";
import SectionHeader from "../../components/mobile/sectionHeaders/sectionHeader";

const Notifications = () => {
  const [all, setAll] = useState<boolean>(true);
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
    <div className="w-full min-h-screen py-3 flex flex-col items-center">
      <div className="w-11/12 text-[21px]">
        <SectionHeader headerTitle="Activity" />
      </div>
      <div className="w-full pl-4 overflow-x-scroll no-scrollbar flex items-center gap-2 mt-3">
        <div onClick={activateAll}>
          <Category
            sizeInPexels="100px"
            category="All"
            theme={all ? "dark" : ""}
          />
        </div>
        <div onClick={activateReplies}>
          <Category
            sizeInPexels="100px"
            category="Replies"
            theme={replies ? "dark" : ""}
          />
        </div>
        <div onClick={activateMentions}>
          <Category
            sizeInPexels="100px"
            category="Mentions"
            theme={mentions ? "dark" : ""}
          />
        </div>
        <div onClick={activateReposts}>
          <Category
            sizeInPexels="100px"
            category="Re-Posts"
            theme={reposts ? "dark" : ""}
          />
        </div>
      </div>
      <div className="w-11/12 mt-3">
        {all ? <AllNotifications /> : null}
        {replies ? <RepliyNotifications /> : null}
        {mentions ? <MentionNotifications /> : null}
        {reposts ? <RepostNotifications /> : null}
      </div>
    </div>
  );
};

export default Notifications;

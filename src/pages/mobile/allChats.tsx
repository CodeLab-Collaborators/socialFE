import { useState } from "react";
import Navs from "../../components/mobile/navs";
import ChatSectionHeader from "../../components/mobile/sectionHeaders/chatSectionHeader";
import DirectMessages from "../../components/mobile/directMessages";
import ava from "../../assets/pep.webp";

const AllChats = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full min-h-screen flex flex-col gap-3 items-center">
      <ChatSectionHeader
        input={
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            placeholder="Search Direct Messages"
            className="w-[180px] h-[30px] rounded-2xl placeholder:text-xs text-[11px] bg-slate-200 px-3 focus:outline-none border-none"
          />
        }
      />
      {search}
      <div className="flex flex-col gap-8">
        <DirectMessages
          profilePhoto={ava}
          name="Pepper Potts"
          userName="@pepperpotts"
          time="23 Jun"
          lastMessage="good evening bros... mentor me na... i no get joy o... and also, I'd like to"
        />
        <DirectMessages
          profilePhoto={ava}
          name="Pepper Potts"
          userName="@pepperpotts"
          time="23 Jun"
          lastMessage="good evening bros... mentor me na... i no get joy o... and also, I'd like to"
        />
      </div>
      <Navs />
    </div>
  );
};

export default AllChats;

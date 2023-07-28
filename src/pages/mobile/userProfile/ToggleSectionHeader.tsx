import { useState } from "react";
import Icons from "../../../components/mobile/reusables/icons";

const TabContent = ({ content }: any) => {
  return <div>{content}</div>;
};

const ToggleSectionHeader = () => {
  const tabItems = ["Tweets", "Retweets", "Replies", "Likes"];
  const [selectedItem, setSelectedItem] = useState(0);

  // Define content for each tab
  const tabContents = [
    // "Content for Tweets tab",
    <Icons icon="hello" sizeInPexels="10px" />,
    "Content for Retweets tab",
    "Content for Replies tab",
    "Content for Likes tab",
  ];

  return (
    <div className="md:px-8 mt-2">
      <ul
        role="tablist"
        className="mx-auto px-4 border-b flex items-start gap-x-10 overflow-x-auto no-scrollbar text-[12px]"
      >
        {tabItems.map((item, idx) => (
          <li
            key={idx}
            className={`py-2 border-b-2 ${
              selectedItem === idx
                ? "border-orange-600 text-orange-600"
                : "border-white text-gray-500"
            }`}
          >
            <button
              role="tab"
              aria-selected={selectedItem === idx ? true : false}
              aria-controls={`tabpanel-${idx + 1}`}
              className="py-2 duration-150 hover:text-orange-600 active:bg-gray-100 font-medium"
              onClick={() => setSelectedItem(idx)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      {/* Render the content of the selected tab */}
      <div className="mt-4 px-4">
        <TabContent content={tabContents[selectedItem]} />
      </div>
    </div>
  );
};

export default ToggleSectionHeader;

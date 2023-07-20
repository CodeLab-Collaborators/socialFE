import { iPostTexts } from "../../../types";

const SinglePostTexts: React.FC<iPostTexts> = ({ message1, message2 }) => {
  return (
    <div className="px-4 my-4 text-xs flex flex-col gap-4">
      <div>{message1}</div>
      <div>{message2}</div>
    </div>
  );
};

export default SinglePostTexts;

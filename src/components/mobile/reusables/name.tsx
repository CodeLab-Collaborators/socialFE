import { BsFillCheckCircleFill } from "react-icons/bs";
type iName = {
  name: string;
  color?: string;
};

const Name: React.FC<iName> = ({ name, color }) => {
  return (
    <div className="flex text-[11px] font-semibold gap-1 items-center">
      <div>{name}</div>
      <div className="text-[9px]" style={{ color: color }}>
        <BsFillCheckCircleFill />
      </div>
    </div>
  );
};

export default Name;

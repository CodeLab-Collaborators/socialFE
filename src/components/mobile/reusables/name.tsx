import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
type iName = {
  name: string;
  color?: string;
};

const Name: React.FC<iName> = ({ name, color }) => {
  return (
    <Link to="/profile-page">
      <div className="flex text-[11px] font-semibold gap-1 items-center">
        <div>{name}</div>
        <div className="text-[9px]" style={{ color: color }}>
          <BsFillCheckCircleFill />
        </div>
      </div>
    </Link>
  );
};

export default Name;

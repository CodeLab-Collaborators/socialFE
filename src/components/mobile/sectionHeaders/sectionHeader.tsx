import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

type iSectionHeader = {
  headerTitle: string;
};

const SectionHeader: React.FC<iSectionHeader> = ({ headerTitle }) => {
  const navogate = useNavigate();
  const prev = () => navogate(-1);

  return (
    <div>
      <div className="flex items-center gap-4">
        <div onClick={prev}>
          <FiArrowLeft />
        </div>
        <div>{headerTitle}</div>
      </div>
    </div>
  );
};

export default SectionHeader;

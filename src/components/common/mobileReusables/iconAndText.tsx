import { iConAndText } from "../../../types";

const IconAndText: React.FC<iConAndText> = ({
  icon,
  text,
  size,
  iconColor,
  textColor,
}) => {
  return (
    <div className={`flex items-center gap-1`}>
      <div
        style={{
          fontSize: `calc(${size + "1px"})`,
          color: `${iconColor || "black"}`,
        }}>
        {icon}
      </div>
      <div
        style={{
          fontSize: `${size}`,
          color: `${textColor || "black"}`,
        }}>
        {text}
      </div>
    </div>
  );
};

export default IconAndText;

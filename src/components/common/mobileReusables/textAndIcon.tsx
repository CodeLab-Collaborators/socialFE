import { iMore } from "../../../types";

const TextAndIcon: React.FC<iMore> = ({
  icon,
  text,
  size,
  backgroundColor,
  iconColor,
}) => {
  return (
    <div className={`text-white justify-between flex items-center gap-4`}>
      <div style={{ fontSize: size }}> {text} </div>
      <div
        style={{
          backgroundColor: backgroundColor,
          color: iconColor,
          fontSize: size,
        }}
        className={`flex items-center justify-center text-xl w-[${size}] p-3 h-[${size}] rounded-[50%]`}>
        {icon}
      </div>
    </div>
  );
};

export default TextAndIcon;

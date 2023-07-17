import { iMore } from "../../../types";

const TextAndIcon: React.FC<iMore> = ({
  icon,
  text,
  size,
  backgroundColor,
  iconColor,
}) => {
  return (
    <div className={`text-white justify-center flex items-center gap-4`}>
      <div className="text-[15px]"> {text} </div>
      <div
        className={`bg-${backgroundColor} flex items-center justify-center text-xl text-${iconColor} w-[${size}] h-[${size}] rounded-[50%]`}>
        {icon}
      </div>
    </div>
  );
};

export default TextAndIcon;

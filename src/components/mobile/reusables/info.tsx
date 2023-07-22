import Icons from "./icons";

type iIcon = {
  icon: any;
  number: string;
};

const Info: React.FC<iIcon> = ({ icon, number }) => {
  return (
    <div className="flex items-center gap-1">
      <Icons sizeInPexels="13px" icon={icon} />
      <div className="text-[11px]">{number}</div>
    </div>
  );
};

export default Info;

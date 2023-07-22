// this component is made for icons. should be wrapped in a linking tag for routing purposes.

type iIcons = {
  icon: any;
  sizeInPexels: string;
  color?: string;
};

const Icons: React.FC<iIcons> = ({ icon, sizeInPexels, color }) => {
  return (
    <div
      style={{
        fontSize: sizeInPexels,
        width: "fit-content",
        height: "fit-content",
        color: color,
      }}>
      {icon}
    </div>
  );
};

export default Icons;

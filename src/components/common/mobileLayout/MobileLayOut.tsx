import { Outlet } from "react-router-dom";
import DestopFooter from "../../static/DestopFooter"

const MobileLayOut = () => {
  return (
    <div className="overflow-x-hidden">
      <Outlet />
      <DestopFooter />
    </div>
  );
};

export default MobileLayOut;

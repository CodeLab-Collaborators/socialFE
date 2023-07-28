import { Outlet } from "react-router-dom";
import Navs from "../../mobile/navs";

const MobileLayOut = () => {
  return (
    <div className="overflow-x-hidden">
      <Outlet />
      <Navs />
    </div>
  );
};

export default MobileLayOut;

import { Outlet } from "react-router-dom";
import { MobileFooter, MobileHeader } from "../../statics";

const MobileHomeLayOut = () => {
  return (
    <div className="w-screen relative min-h-screen">
      <MobileHeader />
      <Outlet />
      <MobileFooter />
    </div>
  );
};

export default MobileHomeLayOut;

import { Outlet } from "react-router-dom";
import { MobileFooter, MobileHeader } from "../../statics";
import { DisplayOver } from "..";

const MobileHomeLayOut = () => {
  return (
    <div className="w-screen bg-white relative min-h-screen">
      <MobileHeader />
      <Outlet />
      <MobileFooter />
      <DisplayOver />
    </div>
  );
};

export default MobileHomeLayOut;

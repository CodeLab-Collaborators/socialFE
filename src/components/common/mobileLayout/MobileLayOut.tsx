import { Outlet } from "react-router-dom";
import Footer from "../../../pages/mobile/common/Footer";

const MobileLayOut = () => {
  return (
    <div className="overflow-x-hidden">
      <Outlet />
      <Footer />
    </div>
  );
};

export default MobileLayOut;

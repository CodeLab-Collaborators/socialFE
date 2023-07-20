import { MobileFooter, MobileHeader } from "../../statics";
import { DisplayOver } from "..";
import { MobileHomeStart } from "../../../pages";

const MobileHomeLayOut = () => {
  return (
    <div className="w-screen bg-white relative min-h-screen">
      <MobileHeader />
      <MobileHomeStart />
      <MobileFooter />
      <DisplayOver />
    </div>
  );
};

export default MobileHomeLayOut;

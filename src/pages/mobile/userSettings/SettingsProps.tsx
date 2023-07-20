import { VscAccount } from "react-icons/vsc";

const SettingsProps = () => {
  return (
    <div>
      <div className="flex w-full bg-orange-500 items-center justify-between py-3 text-white mt-5">
        <div className="w-[10%] text-3xl">
          <VscAccount />
        </div>
        <div className="w-[80%]">
          <h3 className="font-bold">Your account</h3>
          <p className="text-sm">
            See information about your account, download an archive of your data
            or learn about your account deactivation options
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsProps;

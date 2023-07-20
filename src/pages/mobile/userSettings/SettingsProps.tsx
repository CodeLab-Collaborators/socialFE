import React from "react";

interface SettingsProp {
  settingsIcon: any;
  settingsTittle: string;
  settingsDetails: string;
}

const SettingsProps: React.FC<SettingsProp> = ({
  settingsIcon,
  settingsDetails,
  settingsTittle,
}) => {
  return (
    <div>
      <div className="flex w-full items-center justify-between py-3 text-white mt-5">
        <div className="w-[10%] text-3xl text-white">{settingsIcon}</div>
        <div className="w-[80%]">
          <h3 className="font-bold">{settingsTittle}</h3>
          <p className="text-sm">{settingsDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsProps;

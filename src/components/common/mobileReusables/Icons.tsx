// This is an icons components for holding and sizing icons. Sort of like a global icons component.
// Links from this component should be put in a container element holding this component

import { iCon } from "../../../types";

const Icons: React.FC<iCon> = ({ width, icon, color, size }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: `${width || "fit-content"}`,
        color: `${color || "black"}`,
        fontSize: `${size || "15px"}`,
      }}>
      {icon}
    </div>
  );
};

export default Icons;

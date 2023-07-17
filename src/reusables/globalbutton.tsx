import { Link } from "react-router-dom";
import { FC } from "react";
import { buttonData } from "../utils/types";

const Globalbutton: FC<buttonData> = ({
  width,
  onclick,
  title,
  buttonType,
}) => {
  return (
    <Link to={""}>
      <button
        type={buttonType}
        className={`inline-block w-${width}  rounded-lg bg-orange-500 px-8 py-2 text-sm font-medium text-white transition hover:scale-[0.98] hover:shadow-xl focus:outline-none focus:ring active:bg-orange-500`}
        onClick={onclick}
      >
        {title}
      </button>
    </Link>
  );
};

export default Globalbutton;

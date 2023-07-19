import { Link } from "react-router-dom";

const ForgetPassHeader = () => {
  return (
    <div className="w-screen">
      <div className="items-start justify-between py-4 px-4 border-b">
        <div>
          <Link to="/">
            <h3 className="text-2xl font-bold tracking-tighter text-orange-500 ">
              Ajconnect
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassHeader;

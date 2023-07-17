import Sign_in from "./auth/Sign_in";

const MobileStart = () => {
  return (
    <div className="w-screen min-h-[90vh]  max-h-full text-gray-800 grid place-items-center">
      {/* auth holder */}
      <div className="w-[70%] h-[90%] flex flex-col max-sm:w-[80%]">
        {/* Logo */}
        <div className="h-[15%] mb-8 grid place-items-center  font-black text-3xl">
          AJ connect
        </div>
        <Sign_in />
      </div>
    </div>
  );
};

export default MobileStart;

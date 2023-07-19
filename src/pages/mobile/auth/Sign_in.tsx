import { Link } from "react-router-dom";
import Globalbutton from "../../../reusables/globalbutton";
import Input from "../../../reusables/input";
import { FcGoogle } from "react-icons/fc";

const Sign_in = () => {
  return (
    <div className="w-full h-full ">
      {/* Auth input holder */}

      <form
        // onSubmit={ }
        className="flex flex-col mb-2"
      >
        <Input
          placeholder="username"
          inputType="text"
          characterLength={17}
          onchange={() => {}}
          labelName="Username or email"
        />
        <Input
          placeholder="password"
          inputType="password"
          characterLength={20}
          onchange={() => {}}
          labelName="Password"
        />
      </form>

      <div>
        <Globalbutton
          width="full"
          title="Log in"
          buttonType="submit"
          onclick={() => {}}
        />
      </div>
      {/* seperator */}

      <div className="relative">
        <hr className="my-8 " />
        <p className="bg-white p-1 px-4 text-sm font-medium w-fit absolute top-[-14px] right-[40%] text-gray-500">
          OR
        </p>

        {/* social login */}
        <div className="w-full  grid place-items-center gap-8">
          <span className="flex text-lg items-center gap-2">
            <FcGoogle />
            <p className="text-sm font-semibold text-red-500">
              Log in with Google
            </p>
          </span>
          <Link to="password-reset">
            <p className="text-xs text-orange-800">Forgot password?</p>
          </Link>

          {/* route to sign up*/}

          <span className="flex mt-8 items-center gap-1 text-[13px]">
            <p>Don't have an account?</p>
            <Link to="register">
              <p className=" font-semibold text-orange-500">Sign up</p>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sign_in;

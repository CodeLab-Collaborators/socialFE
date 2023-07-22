import { Link, useNavigate } from "react-router-dom";
import Globalbutton from "../../../reusables/globalbutton";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAccount } from "../../../utils/AuthAPI";
import Swal from "sweetalert2";
import { CreateUserParams } from "../../../utils/types";

const Register = () => {
  const navigate = useNavigate();
  const authSchema = yup.object({
    email: yup.string().required(),
    fullName: yup.string().required(),
    userName: yup.string().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(authSchema),
  });

  const onSubmit = handleSubmit(async (data: CreateUserParams) => {
    const { fullName, userName, email, password } = data;

    console.log("Pushing");
    await createAccount({ fullName, userName, email, password }).then(
      async (res: any) => {
        await Swal.fire({
          position: "center",
          icon: "success",
          title: `${res?.data.message}`,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/");
        });
      }
    );
  });

  return (
    <div className="w-screen min-h-screen  max-h-full text-gray-800 flex flex-col items-center justify-center">
      {/* auth holder */}
      <div className="w-[70%] h-[90%] flex flex-col max-sm:w-[80%]">
        {/* Logo */}
        <div className="h-[15%]  grid place-items-center  font-black text-3xl">
          <Link to="/">
            <p className="tracking-tighter text-orange-500"> AJconnect</p>
          </Link>

          <p className="text-sm font-medium text-gray-400 w-[50%] text-center mt-4 max-sm:w-full">
            Sign up to know what's hot and trending on planet earth
          </p>
          {/* button */}
          <div className="w-[85%] mt-4 max-sm:w-full">
            <Globalbutton
              title="Log in with Google"
              width="full"
              onclick={() => {}}
              buttonType="submit"
            />
          </div>
        </div>

        {/* or */}
        <div className="relative mt-2 w-[85%] m-auto">
          <hr className="my-5" />
          <p className="bg-white p-1 px-4 text-sm font-medium w-fit absolute top-[5px] right-[42%] text-gray-500">
            OR
          </p>
        </div>

        {/* form */}
        <form className="flex  items-center flex-col mb-4">
          <div className="relative mb-2 bg-[#f5f5f5] w-full text-[10px]">
            <input
              type="text"
              className="peer m-0 block h-[40px] text-xs w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent  focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none  dark:border-neutral-600 dark:text-neutral-200 dark: [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              placeholder="Full name"
              {...register("fullName")}
              maxLength={22}
              required
            />
            <label className="pointer-events-none absolute left-0 top-[-4px] origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85]  peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200">
              Full name
            </label>
          </div>

          <div className="relative mb-2 bg-[#f5f5f5] w-full text-[10px]">
            <input
              type="email"
              className="peer m-0 block h-[40px] text-xs w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent  focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none  dark:border-neutral-600 dark:text-neutral-200 dark: [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              placeholder="Email"
              {...register("email")}
              maxLength={22}
              required={true}
            />
            <label className="pointer-events-none absolute left-0 top-[-4px] origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85]  peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200">
              Email
            </label>
          </div>

          <div className="relative mb-2 bg-[#f5f5f5] w-full text-[10px]">
            <input
              type="text"
              className="peer m-0 block h-[40px] text-xs w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent  focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none  dark:border-neutral-600 dark:text-neutral-200 dark: [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              placeholder="Username"
              maxLength={22}
              required={true}
              {...register("userName")}
            />
            <label className="pointer-events-none absolute left-0 top-[-4px] origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85]  peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200">
              Username
            </label>
          </div>
          <div className="relative mb-2 bg-[#f5f5f5] w-full text-[10px]">
            <input
              type="password"
              className="peer m-0 block h-[40px] text-xs w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent  focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none  dark:border-neutral-600 dark:text-neutral-200 dark: [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              placeholder="Password"
              maxLength={22}
              aria-required={true}
              {...register("password")}
            />
            <label className="pointer-events-none absolute left-0 top-[-4px] origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85]  peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200">
              Password
            </label>
          </div>

          {/* t and c */}
          <div className="my-5 text-xs text-center text-slate-400">
            <p>
              By signing up, you agree to our terms, Privacy Policy and Cookies
              Policy
            </p>
          </div>
        </form>
        {/* register button */}
        <div className="w-[85%] m-auto max-sm:w-full">
          <Globalbutton
            title="Sign up"
            width="full"
            onclick={() => {
              onSubmit()
                .then(() => {
                  console.log("resolve");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            buttonType="submit"
          />
        </div>

        {/* login container */}
        <span className=" w-full flex justify-center mt-8 items-center gap-1 text-[13px]">
          <p>Have an account?</p>
          <Link to="/">
            <p className=" font-semibold text-orange-500">Log in</p>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;

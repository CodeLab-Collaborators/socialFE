import Globalbutton from "../../../reusables/globalbutton";
import { CreateUserParams } from "../../../utils/types";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIncreateAccount, verifyAccount } from "../../../utils/AuthAPI";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useRecoilState } from "recoil";
import { createUserState } from "../../../utils/stateMgt/Recoil";

const Sign_in = () => {
  const [userState, setUserState] =
    useRecoilState<CreateUserParams>(createUserState);
  const navigate = useNavigate();
  const { id, token } = useParams();

  const authSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const onSubmit = handleSubmit(
    async (data: Omit<CreateUserParams, "fullName" | "userName">) => {
      const { email, password } = data;

      await signIncreateAccount({ email, password })
        .then(async (res: any) => {
          console.log("Reading: ", res.data.data);

          await Swal.fire({
            position: "center",
            icon: "success",
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 2500,
          }).then(() => {
            setUserState(res?.data?.data);
            navigate("/home-page");
          });
        })
        .catch(async (err) => {
          if ((err === undefined) === false) {
            await Swal.fire({
              position: "center",
              icon: "error",
              title: `Error in your cridentials`,
              showConfirmButton: false,
              timer: 3500,
            });
          }
        });

      // reset()
    }
  );

  useEffect(() => {
    if (id && token) {
      verifyAccount(id, token)
        .then(() => {
          console.log("awesome");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  // Define the yup validation schema

  return (
    <div className="w-full h-full ">
      {/* Auth input holder */}

      <form
        // onSubmit={ }
        className="flex flex-col mb-2"
      >
        <div className="relative mb-2 bg-[#f5f5f5] w-full text-[10px]">
          <input
            type="text"
            className="peer m-0 block h-[40px] text-xs w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent  focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none  dark:border-neutral-600 dark:text-neutral-200 dark: [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            placeholder="Username or email"
            {...register("email")}
            maxLength={22}
            required
          />
          <label className="pointer-events-none absolute left-0 top-[-4px] origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85]  peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200">
            Username or email
          </label>
        </div>
        <div className="relative mb-2 bg-[#f5f5f5] w-full text-[10px]">
          <input
            type="password"
            className="peer m-0 block h-[40px] text-xs w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent  focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none  dark:border-neutral-600 dark:text-neutral-200 dark: [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            placeholder="password"
            {...register("password")}
            maxLength={22}
            required
          />
          <label className="pointer-events-none absolute left-0 top-[-4px] origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85]  peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200">
            password
          </label>
        </div>
      </form>
      {errors.password && (
        <div className="text-[10px] text-end capitalize text-red-500 ">
          Password Error
        </div>
      )}

      <div>
        <Globalbutton
          width="full"
          title="Log in"
          buttonType="submit"
          onclick={() => {
            onSubmit()
              .then(() => {
                console.log("data");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        />
      </div>
      {/* seperator */}

      <div className="relative">
        <hr className="my-8 " />
        <p className="bg-white p-1 px-4 text-sm font-medium w-fit absolute top-[-14px] right-[45%] text-gray-500">
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

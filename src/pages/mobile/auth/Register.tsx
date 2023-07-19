import { Link, useNavigate } from "react-router-dom";
import Globalbutton from "../../../reusables/globalbutton";
import Input from "../../../reusables/input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAccountMobile } from "../../../utils/AuthAPI";
import Swal from "sweetalert2";
import { CreateUserParams } from "../../../utils/types";

const Register = () => {
  const navigate = useNavigate();
  const authSchema = yup.object({
    email: yup.string().required(),
    name: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const onSubmit = handleSubmit(async (data: CreateUserParams) => {
    const { name, username, email, password } = data;
    console.log(data);
    console.log("Pushing");
    await createAccountMobile({ username, email, password, name }).then(
      async (res: any) => {
        await Swal.fire({
          position: "center",
          icon: "success",
          title: `${res?.data.message}`,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/user-profile");
        });
      }
    );

    // reset()
  });

  return (
    <div className="w-screen min-h-screen  max-h-full text-gray-800 flex flex-col items-center justify-center">
      {/* auth holder */}
      <div className="w-[70%] h-[90%] flex flex-col max-sm:w-[80%]">
        {/* Logo */}
        <div className="h-[15%]  grid place-items-center  font-black text-3xl tracking-tighter">
          AJ connect
          <p className="text-sm font-medium text-gray-400 w-[70%] text-center mt-4 max-sm:w-full">
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
        <form className="flex flex-col mb-4">
          <Input
            placeholder="Full Name"
            inputType="text"
            characterLength={18}
            onchange={() => {}}
            labelName="Full Name"
            {...register("name")}
          />
          <Input
            placeholder="Email"
            inputType="email"
            characterLength={22}
            onchange={() => {}}
            labelName="email"
            {...register("email")}
          />

          <Input
            placeholder="username"
            inputType="text"
            characterLength={30}
            onchange={() => {}}
            labelName="username"
            {...register("username")}
          />

          <Input
            {...register("password")}
            placeholder="password"
            inputType="password"
            characterLength={20}
            onchange={() => {}}
            labelName="Password"
          />
          <p className="text-xs text-red-500">
            {errors?.email && errors?.email?.message}
          </p>
          <p className="text-xs text-red-500">
            {errors?.username && errors?.username?.message}
          </p>
          <p className="text-xs text-red-500">
            {errors?.password && errors?.password?.message}
          </p>
          <p className="text-xs text-red-500">
            {errors?.name && errors?.name?.message}
          </p>

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
                  // console.log("resolve");
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

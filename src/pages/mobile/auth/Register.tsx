import { Link, useNavigate } from "react-router-dom";
import Globalbutton from "../../../reusables/globalbutton";
import Input from "../../../reusables/input";
import * as yup from "yup";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../../utils/api/api";

const Register = () => {
  const navigate = useNavigate();

  const userSchema = yup
    .object({
      name: yup.string().required("please enter a name"),
      email: yup.string().required("please enter an email"),
      username: yup.string().required("please enter a username"),
      password: yup.string().required("please enter a password"),
    })
    .required();
  type formData = yup.InferType<typeof userSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<formData>({
    resolver: yupResolver(userSchema),
  });

  const posting = useMutation({
    mutationKey: ["createduser"],
    mutationFn: createUser,

    onSuccess: (myData) => {
      console.log("user", myData);
      //   dispatch(login(myData.data));
      Swal.fire({
        title: "User registered sucessfully",
        html: "redirecting to login",
        timer: 2000,
        timerProgressBar: true,

        willClose: () => {
          navigate("/");
        },
      });
    },
  });

  const Submit = handleSubmit(async (data: any) => {
    // console.log(data);

    posting.mutate(data);
  });

  return (
    <div className="w-screen min-h-[90vh]  max-h-full text-gray-800 flex flex-col items-center justify-center">
      {/* auth holder */}
      <div className="w-[70%] h-[90%] flex flex-col max-sm:w-[80%]">
        {/* Logo */}
        <div className="h-[15%]  grid place-items-center  font-black text-3xl">
          AJ connect
          <p className="text-sm font-medium text-gray-500 w-[70%] text-center mt-4 max-sm:w-full">
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
        <div className="relative mt-5 w-[85%] m-auto">
          <hr className="my-5" />
          <p className="bg-white p-1 px-4 text-sm font-medium w-fit absolute top-[5px] right-[42%] text-gray-500">
            OR
          </p>
        </div>

        {/* form */}
        <form onSubmit={Submit} className="flex flex-col mb-4">
          <Input
            placeholder="Email"
            inputType="email"
            characterLength={22}
            onchange={() => {}}
            labelName=" email"
            {...register("email")}
          />
          <Input
            placeholder="Full Name"
            inputType="text"
            characterLength={18}
            onchange={() => {}}
            labelName="Full Name"
            {...register("name")}
          />
          <Input
            placeholder="username"
            inputType="text"
            characterLength={17}
            onchange={() => {}}
            labelName="Username or email"
            {...register("username")}
          />
          {errors?.email && errors?.email?.message}
          <Input
            placeholder="password"
            inputType="password"
            characterLength={20}
            onchange={() => {}}
            labelName="Password"
            {...register("password")}
          />

          {/* t and c */}
          <div className="my-5 text-xs text-center text-slate-400">
            <p>
              By signing up, you agree to our terms, Privacy Policy and Cookies
              Policy
            </p>
          </div>

          {/* register button */}
          <div className="w-[85%] m-auto max-sm:w-full">
            <Globalbutton
              title="Sign up"
              width="full"
              onclick={() => {}}
              buttonType="submit"
            />
          </div>
        </form>

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

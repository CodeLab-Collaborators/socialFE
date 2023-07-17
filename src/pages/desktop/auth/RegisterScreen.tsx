import { BsFacebook } from "react-icons/bs"
import { AiFillApple } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import pix from "../../../assets/myPix.png"

import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { createAccount } from "../../../utils/AuthAPI"
import Swal from "sweetalert2"
import { Link, useNavigate } from "react-router-dom"

export interface iData {
    email?: string;
    password?: string;
    fullName?: string;
    userName?: string;
    confirm?: string;
}

const RegisterScreen = () => {

    const navigate = useNavigate()
    const authSchema = yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
        confirm: yup.string().oneOf([yup.ref("password")])
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(authSchema)
    })

    const onSubmit = handleSubmit(async (data: iData) => {
        const { fullName, userName, email, password } = data
        console.log(data)
        console.log("Pushing")
        await createAccount({ fullName, userName, email, password }).then(async (res: any) => {
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${res?.data.message}`,
                showConfirmButton: false,
                timer: 2500
            }).then(() => {
                navigate("/register-info")
            })
        })

        // reset()
    })

    return (
        <div className="w-[100%] flex mb-[40px] h-full" >
            <div className="w-[100vw] flex 
            justify-center items-center
           
            
            ">
                <div
                    className="w-[300px] mr-4"
                >
                    <img
                        src={pix}
                        alt="image"

                    />
                </div>


                <div className="w-[300px] " >


                    <div className="rounded border-orange-200 w-[300px] border p-1 flex flex-col justify-center items-center pb-1 " >
                        {/* logo */}
                        <div className="text-[20px] font-semibold my-2 " >AJ Connect</div>
                        {/* content */}
                        <div className="w-[70%] text-xs text-center mb-4" >Sign up to see Photes and Video from your Friends.</div>

                        {/* Option */}
                        <div className="text-xs font-semibold mb-3" >Log in with</div>

                        <div className="flex items-center mb-4" >
                            <div className="mx-2 text-[dodgerblue] "  >
                                <BsFacebook />
                            </div>
                            <div className="mx-2 text-[23px]" >
                                <AiFillApple />
                            </div>
                            <div className="mx-2" >
                                <FcGoogle />
                            </div>
                        </div>

                        <div className="flex items-center  w-[85%] ">
                            <div className="rounded-sm border-b-orange-200 border  w-[90%]  " />
                            <div className="mx-2 text-xs text-black" >OR</div>
                            <div className="rounded-sm border-b-orange-200 border  w-[90%]  " />
                        </div>

                        {/* Form */}

                        <form
                            className="flex flex-col items-center  w-[95%] mt-2">




                            <div className="flex flex-col w-[90%] mt-3" >
                                <div className="text-xs capitalize" >Email</div>
                                <input
                                    {...register("email")}
                                    placeholder="Eneter your Email "
                                    className=" text-xs border-orange-200 p-1 border w-[100%] outline-none h-[40px] pl-3 text-neutral-700 focus:pt-[1.025rem] font-normal leading-tight transition-all duration-200 ease-linear focus:outline-none dark: [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] rounded"
                                />
                                {
                                    errors.email && <div className="text-[10px] text-end capitalize text-red-500 ">Email Error</div>
                                }
                            </div>





                            <div className="flex flex-col w-[90%] mt-3" >
                                <div className="text-xs capitalize" >Password</div>
                                <input
                                    {...register("password")}
                                    placeholder="Enter your Password"
                                    className=" text-xs border-orange-200 p-1 border w-[100%] outline-none h-[40px] pl-3 text-neutral-700 focus:pt-[1.025rem] font-normal leading-tight transition-all duration-200 ease-linear focus:outline-none dark: [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] rounded"

                                />


                                {
                                    errors.password && <div className="text-[10px] text-end capitalize text-red-500 ">Password Error</div>
                                }
                            </div>

                            <div className="flex flex-col w-[90%] my-3" >
                                <div className="text-xs capitalize" >Confirm Password</div>
                                <input
                                    {...register("confirm")}
                                    placeholder="Eneter your Confrim Password "
                                    className=" text-xs border-orange-200 p-1 border w-[100%] outline-none h-[40px] pl-3 text-neutral-700 focus:pt-[1.025rem] font-normal leading-tight transition-all duration-200 ease-linear focus:outline-none dark: [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] rounded"
                                />
                                {errors.confirm && <div className="text-[10px] text-end capitalize text-red-500 ">Confirm Password Error</div>}
                            </div>

                        </form>



                        <div className="w-[70%] text-xs text-center mb-4" >By signing up, you agree to our <span className="text-[#F97316] font-semibold">Terms</span> and <span className="text-[#F97316] font-semibold" >Conditions</span>
                        </div>

                        <button className="bg-[#F97316] font-semibold  rounded-sm text-white w-[97%] py-2 hover:scale-[1.015] transition-all duration-300  " type="submit" onClick={() => {

                            onSubmit().then(() => {
                                console.log("resolve")
                            }).catch(err => {
                                console.log(err)
                            })

                        }} >Sign up</button>

                    </div>



                    <div className="flex items-center justify-center  w-[100%] my-4 p-2 border  ">
                        Have an Account?
                        <Link to="/" className="no-underline text-white" >
                            <span className="mx-2 text-[#F97316] font-semibold cursor-pointer hover:scale-105 transition-all duration-300" >Log In</span></Link>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default RegisterScreen
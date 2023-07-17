import { BsFacebook } from "react-icons/bs"
import { AiFillApple } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import pix from "../../../assets/myPix.png"
import { useEffect } from "react"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { signIncreateAccount, verifyAccount } from "../../../utils/AuthAPI"
import Swal from "sweetalert2"
import { Link, useNavigate, useParams } from "react-router-dom"

export interface iData {
    email?: string;
    password?: string;
    fullName?: string;
    userName?: string;
    confirm?: string;
}

const SignInTabScreen = () => {
    const { id, token } = useParams()
    const navigate = useNavigate()
    const authSchema = yup.object({

        email: yup.string().required(),
        password: yup.string().required(),
    })

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(authSchema)
    })

    const onSubmit = handleSubmit(async (data: iData) => {
        const { email, password } = data

        await signIncreateAccount({ email, password }).then(async (res: any) => {
            console.log("Reading: ", res.data.data)


            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${res.data.message}`,
                showConfirmButton: false,
                timer: 2500
            }).then(() => {
                navigate("/home")
            })
        }).catch(async (err) => {

            if ((err === undefined) === false) {
                await Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `Error in your cridentials`,
                    showConfirmButton: false,
                    timer: 3500
                })
            }
        })



        // reset()
    })

    useEffect(() => {
        if (id && token) {
            verifyAccount(id, token).then(() => {
                console.log("awesome")
            }).catch(err => {
                console.log(err)
            })
        }
    })

    return (
        <div className="w-[100%] flex mb-[40px] h-full" >
            <div className="w-[100vw] flex mt-[40px]
            justify-center 
          
            
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


                    <div className="rounded-sm border-orange-200 w-[300px] border p-1 flex flex-col justify-center items-center  " >
                        {/* logo */}
                        <div className="text-[20px] font-semibold my-2 " >logo</div>
                        {/* content */}
                        <div className="w-[70%] text-xs text-center mb-4" >Sign in to see Photes and Video from your Friends.</div>

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
                                    className="text-sm border-orange-200 p-1 border w-[100%] outline-none"
                                />
                                {
                                    errors.email && <div className="text-[10px] text-end capitalize text-red-500 ">Email Error</div>
                                }
                            </div>





                            <div className="flex flex-col w-[90%] mt-3" >
                                <div className="text-xs capitalize" >Password</div>
                                <input
                                    {...register("password")}
                                    placeholder="Eneter your Password"
                                    className="text-sm border-orange-200 p-1 border w-[100%] outline-none"
                                />
                                {
                                    errors.password && <div className="text-[10px] text-end capitalize text-red-500 ">Password Error</div>
                                }
                            </div>

                        </form>



                        <button className=" mt-5 bg-[#F97316] font-semibold  rounded-sm text-white w-[97%] py-2 hover:scale-[1.015] transition-all duration-300 mb-3" type="submit" onClick={() => {

                            onSubmit().then(() => {
                                console.log("resolve")
                            }).catch(err => {
                                console.log(err)
                            })

                        }} >Sign In</button>

                    </div>



                    <div className="flex items-center justify-center  w-[100%] my-4 p-3 border text-sm  ">
                        Don't Have an Account? <Link to="/register" className="no-underline text-white" ><span className="mx-2 text-[#F97316] font-semibold cursor-pointer hover:scale-105 transition-all duration-300" >Create One </span></Link>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default SignInTabScreen
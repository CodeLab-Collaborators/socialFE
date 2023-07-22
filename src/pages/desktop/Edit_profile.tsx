import img from "../../assets/myPix.png"
import { useState } from "react"


const Edit_profile = () => {

    const [gender, setGender] = useState("")
    const [show, setShow] = useState(false)

    const Toggle = () => {
        setShow(!show)
    }

    const Remove = () => {
        setShow(false)
    }

    const handleGenderChange = (e: any) => {
        setGender(e.target.value)
    }
    return (
        <div className="flex-col flex items-center w-[100%]">
            <h1 className="text-[20px] w-[100%]">Edit profile</h1>

            <div className="w-[60%] column h-[40px] mt-[50px]">
                <div className="w-[100%] flex items-center mb-[40px]">
                    <div className="w-[68px] flex justify-end">
                        <img
                        src={img}
                        className="w-[40px] h-[40px] rounded-full object-top object-cover"
                    />
                    </div>

                    <div className="flex-col ml-[60px]">
                        <h3>peter.otti</h3>
                        <p onClick={Toggle} className="text-[blue] text-[14px] cursor-pointer">Change profile photo</p>
                    </div>
                </div>

                <div className="w-[100%] flex mb-[40px]">
                    <div className="w-[70px] flex justify-end">
                        <h3>Bio</h3>
                    </div>

                    <textarea
                        placeholder="Enter your bio here..."
                        className="ml-[70px] bg-none resize border rounded-md w-[100%] h-[100px] p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </textarea>
                </div>

                <div className="w-[100%] flex">
                    <div className="w-[70px] flex justify-end">
                        <h3>Gender</h3>
                    </div>

                    <div>
                        
                        <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleGenderChange}
                        className="ml-[60px]"
                    />
                        <label className="ml-4">Male</label>
                        <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleGenderChange}
                        className="ml-[60px]"
                    />
                    <label className="ml-4">Female</label>
                    </div>
                </div>

                <div className="w-[100%] flex items-center mb-[40px]">
                    <div className="w-[68px] flex justify-end">
                        
                    </div>

                    <button className="w-[100px] h-[35px] flex justify-center items-center ml-[60px] text-[#fff] bg-[#1877F2] rounded-md mt-[40px]">
                        Submit
                    </button>
                </div>
            </div>

            {show ? (
                <div onClick={Remove} className="w-[100%] h-[100vh] bg-black bg-opacity-50 top-0 left-0 fixed flex items-center justify-center flex-col">
                <div className="w-[400px] h-[200px] bg-[#262626] rounded-md flex-col">
                    <div className="text-[16px] w-[100%] flex justify-center items-center border-b border-[#f7f7f7] text-[#fff] pt-[16px] pb-[16px]">
                        <h3>Change Profile Photo</h3>
                    </div>
                    <div className="w-[100%] flex justify-center items-center border-b border-[#f7f7f7] text-[#1877F2] pt-[12px] pb-[12px] cursor-pointer">
                        <h3>Upload photo</h3>
                    </div>
                    <div className="w-[100%] flex justify-center items-center border-b border-[#f7f7f7] text-[#FA383E] pt-[12px] pb-[12px] cursor-pointer">
                        <h3>Remove current photo</h3>
                    </div>
                    <div className="w-[100%] flex justify-center items-center text-[#fff] pt-[12px] pb-[12px] cursor-pointer">
                        <h3 onClick={Remove}>cancle</h3>
                    </div>
                </div>
            </div>
            ) : null}
        </div>
    )
}

export default Edit_profile
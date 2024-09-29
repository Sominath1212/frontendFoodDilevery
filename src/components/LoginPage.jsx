import React from 'react'
import { IoMailOpenSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
function LoginPage() {
    const navigate = useNavigate()
    return (
        <div className='relative bg-white/40 sm:mx-56   h-[50vh] sm:h-[90vh]  top-10 left-0 right-0 rounded-lg border space-y-3   mx-1 flex flex-col items-center  justify-center backdrop-blur-lg  white/90' >

            <div className='border flex items-center justify-center flex-col mx-3 bg-gray-200 p-2 rounded-md'>
                <h1 className='text-2xl sm:text-3x l font-bold '>Login </h1>

                <form className='flex flex-col text-center items-center justify-center'>
                    <div className=' flex items-center bg-[#FF6600] rounded-lg border my-2'>
                        <input type="email" placeholder='email' className="text-center  rounded-l-md outline-none border-none placeholder:text-[#FF6600] " />
                        <IoMailOpenSharp className='m-1' />
                    </div>
                    <div className='flex items-center bg-[#FF6600] rounded-lg border mb-2'>
                        <input type="password" placeholder='password' className="text-center  rounded-l-md outline-none border-none placeholder:text-[#FF6600] " />
                        <FaRegEyeSlash className='m-1' />
                    </div>
                    <p className=' underline text-[4px] cursor-pointer relative left-46'>forgot password</p>

                    <button className=' border rounded-lg px-3 my-3 w-full  bg-[#FF6600]'
                        onClick={() => {
                            toast.success('Login sucessefully!');
                            
                        }}
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
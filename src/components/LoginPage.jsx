import React from 'react'
import { IoMailOpenSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
function LoginPage() {
    return (
        <div className='relative bg-white/40 sm:mx-56  h-[90vh]  top-10 left-0 right-0 rounded-lg border space-y-3   mx-1 flex flex-col items-center  justify-center backdrop-blur-lg  white/90' >

            <h1 className='text-2xl sm:text-3x l font-bold '>Login </h1>

            <form className='flex flex-col text-center items-center justify-center'>
                <div className=' flex items-center bg-blue-500 rounded-lg border my-2'>
                    <input type="email" placeholder='email' className="text-center  rounded-l-md outline-none border-none placeholder:text-blue-500 " />
                    <IoMailOpenSharp className='m-1' />
                </div>
                <div className='flex items-center bg-blue-500 rounded-lg border mb-2'>
                    <input type="password" placeholder='password' className="text-center  rounded-l-md outline-none border-none placeholder:text-blue-500 " />
                    <FaRegEyeSlash className='m-1' />
                </div>
                <p className=' underline text-[4px] cursor-pointer relative left-46'>forgot password</p>

                <button className=' border rounded-lg px-3 my-3 bg-blue-700'>Submit</button>
            </form>
        </div>
    )
}

export default LoginPage
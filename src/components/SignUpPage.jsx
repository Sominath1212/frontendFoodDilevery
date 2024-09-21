import React from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { IoMailOpenSharp } from 'react-icons/io5'
import { RiFileUserLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function SignUpPage() {
    return (
        <div className='relative bg-white/40 sm:mx-56  h-[90vh]  top-10 left-0 right-0 rounded-lg border space-y-3   mx-1 flex flex-col items-center  justify-center backdrop-blur-lg  white/90 '>

            <h1 className='text-2xl sm:text-3xl font-bold '>Sign Up </h1>

            <form className='flex flex-col text-center items-center justify-center'>
                <div className=' flex items-center bg-blue-500 rounded-lg border my-2'>
                    <input type="text" placeholder='name' className="text-center  rounded-l-md outline-none border-none sm:py-1 sm:px-10 placeholder:text-blue-500 " />
                    <RiFileUserLine className='m-1' />
                </div>
                <div className=' flex items-center bg-blue-500 rounded-lg border my-2'>
                    <input type="email" placeholder='email' className="text-center  rounded-l-md outline-none sm:py-1 sm:px-10 border-none placeholder:text-blue-500 " />
                    <IoMailOpenSharp className='m-1' />
                </div>
                <div className='flex items-center bg-blue-500 rounded-lg border mb-2'>
                    <input type="password" placeholder='password' className="text-center  rounded-l-md outline-none border-none sm:py-1 sm:px-10 placeholder:text-blue-500 " />
                    <FaRegEyeSlash className='m-1 ' />
                </div>
                <div className='flex items-center  w-[65%] my-2 text-sm'>
                    <input type="checkbox" required /> <p className='text-sm relative top-2    '>I agree to <span className='text-green-500 font-semibold'>Food store</span> 's Terms of Service, <span className='font-semibold'>Privacy Policy </span> and <span className='font-semibold'>Content Policies</span> </p>
                </div>

                <button className=' border rounded-lg px-10 my-3 border-blue-500 bg-blue-700 hover:bg-transparent hover:border-2 '>Sign Up </button>
                <p className='text-sm '>If you already have account then <Link to='/loginpage'><span className='text-blue-500 underline cursor-pointer'>Login here</span></Link> </p>
            </form>
        </div>
    )
}

export default SignUpPage
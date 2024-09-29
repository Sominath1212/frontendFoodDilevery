import React from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { IoMailOpenSharp } from 'react-icons/io5'
import { RiFileUserLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function SignUpPage() {
    return (
        <div className='relative  sm:mx-56  sm:h-[90vh] h-[60vh]  top-10 left-0 right-0 rounded-lg border space-y-3   mx-1 flex flex-col items-center  justify-center backdrop-blur-lg  white/90 '>

          <div className='border flex items-center justify-center flex-col mx-3 bg-gray-200 p-2 rounded-md'>
                <h1 className='text-2xl sm:text-3xl font-bold '>Sign Up </h1>

                <form className='flex flex-col text-center items-center  justify-center'>
                    <div className=' flex items-center bg-[#FF6600] rounded-lg border my-2'>
                        <input required  type="text" placeholder='name' className="text-center  rounded-l-md outline-none border-none sm:py-1 sm:px-10 placeholder:text-[#FF6600] " />
                        <RiFileUserLine className='m-1' />
                    </div>
                    <div className=' flex items-center bg-[#FF6600] rounded-lg border my-2'>
                        <input required  type="email" placeholder='email' className="text-center  rounded-l-md outline-none sm:py-1 sm:px-10 border-none placeholder:text-[#FF6600] " />
                        <IoMailOpenSharp className='m-1' />
                    </div>
                    <div className='flex items-center bg-[#FF6600] rounded-lg border mb-2'>
                        <input required  type="password" placeholder='password' className="text-center  rounded-l-md outline-none border-none sm:py-1 sm:px-10 placeholder:text-[#FF6600] " />
                        <FaRegEyeSlash className='m-1 ' />
                    </div>
                    <div className='flex items-center  w-[65%] my-2 text-sm'>
                        <input  type="checkbox" required /> <p className='text-sm relative top-2    '>I agree to <span className='text-[#FF6600] font-semibold'>Food store</span> 's Terms of Service, <span className='font-semibold'>Privacy Policy </span> and <span className='font-semibold'>Content Policies</span> </p>
                    </div>

                    <button className=' border rounded-lg px-10 my-3 border-[#FF6600] bg-[#FF6600] hover:bg-transparent hover:border-2 ' 
                    onClick={()=>{
                        toast.success('SignUp sucessefully!');
                        
                    }}
                    >Sign Up </button>
                    <p className='text-sm '>If you already have account then <Link to='/loginpage'><span className='text-[#FF6600] underline cursor-pointer'>Login here</span></Link> </p>
                </form>
          </div>
        </div>
    )
}

export default SignUpPage
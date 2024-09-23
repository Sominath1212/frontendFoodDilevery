import React from 'react'
import { ImSpoonKnife } from 'react-icons/im'
import playStore from '../assets/images/play_store.png'
import AppleStore from '../assets/images/app_store.png'
import { FaFacebook } from 'react-icons/fa'
import { PiInstagramLogoLight } from "react-icons/pi";
import { FcGoogle } from 'react-icons/fc'
import { TfiEmail } from 'react-icons/tfi'
function Footer() {
    return (
        <div className='bottom-0 relative  w-full  pt-4 sm:px-4 px-2 shadow-lg bg-gray-600'>

            <div className='flex text-white items-center justify-center space-x-10 '>

                <div>
                    <h1 style={{ fontFamily: "Montserrat" }} className='flex cursor-pointer items-center justify-center'><span className='text-[#FF6600] font-bold text-3xl '>Food</span><span className='underline font-bold italic mx-1 '>store</span><span><ImSpoonKnife className='text-[#FF6600]' /></span></h1>

                </div>
                <div className='sm:flex my-1 items-center'>
                    <img src={playStore} alt="" className='cursor-pointer w-[100px]' />
                    <img src={AppleStore} alt="" className='cursor-pointer w-[100px]' />
                </div>
            </div>
            <div className='space-x-3 mt-3 flex  items-center justify-center '>
                <FaFacebook className='shadow-xl cursor-pointer  text-blue-700' size={20} />
                <PiInstagramLogoLight className=' cursor-pointer rounded-sm bg-gradient-to-r from-purple-500 from-10% via-red-500 via-30% to-yellow-500 to-90%' />
                <FcGoogle size={20} className='cursor-pointer' />
                <TfiEmail size={20} className='text-white cursor-pointer' />
            </div>
            <div className='my-3'>
          <hr />
                <p className='text-gray-400 text-[5px] sm:text-[10px] text-center font-extralight  '>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © FoodStore™ Ltd. All rights reserved.</p>
           </div>
        </div>
    )
}

export default Footer
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ImSpoonKnife } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
function Navbar() {
    const [isActive, setisActive] = useState("home");
    const [toggle, setToggle] = useState(false);

    const [showinput, setShowInput] = useState(false)
    return (
        <>
            <div className='z-10 bg-gray-600 px-2  fixed w-full   sm:px-4 text-white top-0 shadow-sm right-0 left-0 flex items-center justify-between'>
                {/* logo */}
                <Link to='/'> <div>
                    <h1 style={{ fontFamily: "Montserrat" }} className='flex  items-center justify-center'><span className='text-[#FF6600] font-bold text-3xl '>Food</span><span className='underline font-bold italic mx-1 '>store</span><span><ImSpoonKnife className='text-[#FF6600]' /></span></h1>
                </div></Link>

                {/* menu  */}
                <ul className='sm:flex hidden sm:space-x-4 items-center justify-center '>
                    <Link to='/'>    <li onClick={() => setisActive("home")} className={`${isActive == "home" ? 'border-x-0 border-t-0 border-2 border-[#FF6600] border-b-2' : ""}hover:border-b-2 hover:border-[#FF6600] `}><button className=' text-sm  hover:scale-105  outline-none  px-2 py-0.5 rounded-lg'>Home</button></li></Link>
                    <Link to='ExporeMenu'> <li onClick={() => setisActive("menu")} className={`${isActive == "menu" ? ' border-x-0 border-t-0 border-2 border-[#FF6600] border-b-2' : ""}hover:border-b-2 hover:border-[#FF6600]`}><button className=' text-sm  hover:scale-105  outline-none  px-2 py-0.5 rounded-lg'>Menu</button></li></Link>
                    <Link to='/contactus'>  <li onClick={() => setisActive("contacts")} className={`${isActive == "contacts" ? '  border-x-0 border-t-0 border-2 border-[#FF6600] border-b-2' : ""}hover:border-b-2 hover:border-[#FF6600]`}><button className=' text-sm  hover:scale-105  outline-none  px-2 py-0.5 rounded-lg'>Contact us</button></li></Link>
                </ul>
                {/* icon */}
                <div className='flex items-center justify-center space-x-2 '>
                    <div className={`flex items-center ${showinput ?'border rounded-lg':""}
                    
                    `}>
                        {
                            showinput ?
                                <input type="search" className='rounded-l-lg outline-none sm:flex hidden text-black  text-center placeholder:text-black' placeholder='search' /> : ""
                        }

                        <FiSearch className='cursor-pointer text-xl p-1 ' onClick={() => setShowInput(!showinput)} />
                    </div>

                    <Link to='/cart'><BsBagCheck className='cursor-pointer text-xl ' /></Link>


                    {/* sign up button  */}
                    <div>
                        <Link to='signuppage'><button className=' text-sm  hover:scale-105 hover:border-[#000] border text-[#000] bg-[#FF6600] px-2 py-0.5 rounded-lg'> Sign up</button></Link>
                    </div>
                    {
                        !toggle ? <FaHamburger onClick={() => { setToggle(!toggle) }} className='sm:hidden block' />
                            : <IoCloseCircle onClick={() => { setToggle(!toggle) }} className='sm:hidden block ' />
                    }
                </div>

            </div>
            {/* mobile menu */}

            <div className={`px-3 py-3 z-10 absolute  top-9 w-full  h-[100vh]  shadow-lg sm:hidden ${toggle ? 'flex' : "hidden"} flex-col items-center backdrop-blur-lg`}>

                
                    <ul className='flex flex-col sm:space-x-4 items-center justify-center '>
                    <Link to='/'>    <li onClick={() => {setisActive("home") ,setToggle(!toggle)} } className={`${isActive == "home" ? 'border-x-0 border-t-0 border-2   border-[#FF6600] border-b-2 text-black' : ""}hover:border-b-2 hover:border-[#FF6600] `}><button className=' text-sm  hover:scale-105  outline-none  px-2 py-0.5 rounded-lg'>Home</button></li></Link>
                    <Link to='ExporeMenu'> <li onClick={() => { setisActive("menu"), setToggle(!toggle) }} className={`${isActive == "menu" ? ' border-x-0 border-t-0 border-2   border-[#FF6600] border-b-2 text-black' : ""}hover:border-b-2 hover:border-[#FF6600]`}><button className=' text-sm  hover:scale-105  outline-none  px-2 py-0.5 rounded-lg'>Menu</button></li></Link>
                    <Link to='/contactus'>  <li onClick={() => { setisActive("contacts"), setToggle(!toggle) }} className={`${isActive == "contacts" ? '  border-x-0 border-t-0   border-2 border-[#FF6600] border-b-2 text-black' : ""}hover:border-b-2 hover:border-[#FF6600]`}><button className=' text-sm  hover:scale-105  outline-none  px-2 py-0.5 rounded-lg'>Contact us</button></li></Link>
                    </ul>
                   

                <div className='space-x-3 mt-3 flex  items-center justify-center '>
                    <FaFacebook className='shadow-xl  ' size={20} />
                    <FaSquareInstagram size={20} />
                    <FcGoogle size={20} />
                    <TfiEmail size={20} />
                </div>


            </div>
        </>
    )
}

export default Navbar
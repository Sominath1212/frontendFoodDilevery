import React from 'react'
import { ImSpoonKnife } from 'react-icons/im'
import Footer from './Footer'
import ExporeMenu from './ExporeMenu'
import { Link } from 'react-router-dom'

function LandingPage() {

    return (
        <>

            <div className="banner">
                <div className='   w-full sm:h-[70vh]   flex flex-col items-center justify-center sm:relative sm:pt-10'>

                    <Link to='/'>
                        <div>
                            <h1 style={{ fontFamily: "Montserrat" }} className='flex cursor-pointer items-center justify-center'><span className='text-green-500 font-bold text-3xl '>Food</span><span className='underline font-bold italic mx-1 '>store</span><span><ImSpoonKnife className='text-green-500' /></span></h1>
                        </div>
                    </Link>

                    <pre className='px-3 text-center'> <h1 className='flex  transition-all duration-700 items-start  font-bold font-serif text-center sm:text-4xl text-black'>Are you hungry ? your food <ImSpoonKnife className='text-green-500' />  is here.</h1></pre>

                    <p className='sm:text-xl text-center text-black mt-4' >"One cannot think well, love well, sleep well, if one has not dined well."</p>
                    <Link to="/ExporeMenu"><button className='font-bold border bg-green-500 hover:scale-110 duration-700 transition-all text-black px-2 relative self-center py-1 rounded-lg mx-auto  top-7'>Get started</button></Link>
                </div>
            </div>

            {/* adding a explore menu options */}
            <ExporeMenu />
            <Footer />

        </>
    )
}

export default LandingPage
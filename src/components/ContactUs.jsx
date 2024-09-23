import React from 'react'

function ContactUs() {
  return (
    <div className='w-full h-[100vh] bg-gray-400 flex items-center justify--center '>
      <div className=' bg-white border-2 rounded-lg min-w[500px] my-auto mx-auto p-5 shadow-lg text-black'>

        <h1 className='text-xl font-bold font-sans '>Contact Us</h1>
        <p className='text-sm text-[#FF6600] '>Please fill this form in a decent manner</p>

        <form >
          <label htmlFor="firstName" className='text-l font-bold my-2 '>First name:</label><br />
          <input  type="text" name='firstName' required className=' border-[0.9px] outline-none w-[100%] rounded-lg pl-2 '/> <br />
          <label htmlFor="lastName" className='text-l font-bold my-2 '>Last name:</label><br />
          <input type="text" name='lastName' required className=' border-[0.9px] outline-none w-[100%] rounded-lg pl-2 ' /> <br />
          <label htmlFor="email" className='text-l font-bold my-2 '>Email:</label><br />
          <input type="email" name='email' required className=' border-[0.9px] outline-none w-[100%] rounded-lg pl-2 ' />
          <br />
          <label htmlFor="query" className='text-l font-bold my-2 '>Your Query:</label><br />
          <textarea required name="query" className=' border-[0.9px] outline-none w-[100%] rounded-lg pl-2 '></textarea><br />
          <button className='font-bold border w-full bg-[#FF6600] hover:scale-110 duration-700 transition-all text-black px-2 relative self-center py-1 rounded-lg mx-auto '>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
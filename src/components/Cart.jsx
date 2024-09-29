import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContex'
import cashImage from '../assets/images/cash.png'
import PaypalImage from '../assets/images/paypal.png'
import PhonePayImage from '../assets/images/phonepay.png'
import CreaditCartImage from '../assets/images/creaditeCart.png'
import { AiTwotoneDelete } from "react-icons/ai";
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

{/*
   */}
function Cart() {
  const { cartItems, foodList, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate()
  const [TotalPrice, setTotalPrice] = useState(0)





  return (
    <>
      <div className='bg-#F5F5F5 h-[100vh] text-black pt-10 px-3'>

        <div className="sm:grid grid-cols-5 grid-rows-5 gap-4">
          <div className="bg-#F5F5F5 col-span-3 row-span-5 border sm:min-h-[90vh]">

            <div className='m-3'>
              <div className='flex items-center text-sm justify-between  px-10 py-3 mx-auto'>
                <p className='text-md font-semibold uppercase'>Item</p>
                <p className='text-md font-semibold uppercase'>quentity</p>
                <p className='text-md font-semibold uppercase'>Price</p>
                <p className='text-md font-semibold uppercase'>Total</p>
                <p className='text-md font-semibold uppercase'>Remove</p>
              </div>
              <hr className='text-black bg-black h-[1px]' />
              <div className='overflow-scroll  overflow-x-hidden sm:max-h-[70vh] '>
                {
                  foodList.map((item, index) => {
                    if (cartItems[item.id] > 0) {


                      return (
                        <div key={index}>
                          <div className='flex  items-center text-sm justify-between  px-10 py-3 mx-auto '>

                            <img src={item.image_url} alt={item?.name} height={20} width={20} />
                            <p>{cartItems[item.id]}</p>
                            <p className=''>{item?.price}</p>
                            <p>${cartItems[item.id] * item?.price}</p>

                            < AiTwotoneDelete onClick={() => removeFromCart(item.id)} className='cursor-pointer' />
                          </div>
                          <hr className='text-black bg-black h-[1px]' />
                        </div>

                      )
                    }

                  })
                }
              </div>

            </div>
          </div>
          <div className=" col-span-2 shadow-xl border-1 row-span-5 col-start-4 border p-5 rounded-lg">
            <h1 className='text-xl font-bold font-sans '>Selecet Payment Option</h1>
            <p className='text-sm  '>All transition are secure & encripted</p>
            <div className='flex justify-between  px-2 py-1 rounded-md items-center my-4 bg-gray-300  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'>
              <input type="radio" />
              <span> PayPal</span>
              <img src={PaypalImage} width={20} height={20} className='mix-blend-multiply' alt="" />
            </div>
            <div className='flex   justify-between border px-2 py-1 rounded-md items-center bg-gray-200 my-4'>
              <input type="radio" />
              <span>PhonePay</span>
              <img src={PhonePayImage} width={40} height={40} className='mix-blend-multiply' alt="" />
            </div>
            <div className='flex  justify-between border px-2 py-1 rounded-md items-center bg-gray-200 my-4'>
              <input type="radio" />
              <span>Creadit Cart</span>
              <img src={CreaditCartImage} width={40} height={40} className='mix-blend-multiply' alt="" />

            </div>
            <div className='flex  justify-between border px-2 py-1 rounded-md items-center bg-gray-200 my-4'>
              <input type="radio" className='rounded-full ' />
              <span>Cash</span>
              <img src={cashImage} width={40} height={40} className='mix-blend-multiply' alt="" />
            </div>
            <div className='flex  text-sm my-5 mx-[5%] space-x-1'>
              <input type="checkbox" required /> <p>Agree with all terms & condintions of ordering </p>
            </div>

            <button className='font-bold border bg-[#FF6600] hover:scale-110 duration-700 transition-all text-black px-2 relative self-center py-1 rounded-sm mx-[5%] w-[90%] '
              onClick={() => {
                toast.success('Your order get placed')
                navigate("/");
              }}
            >{`$${TotalPrice} | Order Now `}</button>

          </div>
        </div>

      </div>

    </>
  )
}

export default Cart
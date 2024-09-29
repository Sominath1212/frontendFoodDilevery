import React, { useContext } from 'react'
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { StoreContext } from '../context/StoreContex';
import toast from 'react-hot-toast';
function FoodCart({ title, image, descripion, rating, price, id }) {



    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
    function calculateRating(rating) {

        const r = Math.floor(rating);
        if (r == 0) {
            return "";
        } else if (r == 1) {
            return "⭐";
        } else if (r == 2) {
            return "⭐⭐";
        } else if (r == 3) {
            return "⭐⭐⭐";
        } else if (r == 4) {
            return "⭐⭐⭐⭐";
        } else if (r == 5) {
            return "⭐⭐⭐⭐⭐";
        }
    }
    return (
        <div className='bg-white/60 p-3 shadow-xl border  mt-5 self-center hover:scale-105 transition-all duration-700 rounded-lg cursor-pointer text-black flex flex-col items-center justify-center' >
            <img src={image} alt="" className='rounded-t-lg sm:h-33 md:h-44 w-[200px] rounded-sm mix-blend-multiply' />


            <h4 className=' font-bold text-[#FF6600] my-3  text-md  text-center'>{title}</h4>
            <span className='text-[16px] flex mb-2 '>{calculateRating(rating)}</span>

            <p className="text-sm text-center ">{descripion}</p>
            <span className='flex item-center justify-between w-full px-5'>
                <h4 className='text-xl font-bold '>${price}</h4>
                <span className=' flex items-center justify-center space-x-1 rounded-full px-1 my-1'>
                    {
                        !cartItems == 0 ? <> <RiSubtractFill className='text-2xl bg-[#FF6600] cursor-pointer font-extrabold border-1 hover:scale-105 h-5 w-5 flex items-center justify-center rounded-full text-center ' onClick={() => {
                            removeFromCart(id)
                            toast.success(`${title} is remove `)
                        }
                        } />  <p>{cartItems[id]}</p></> : ""
                    }
                    <IoMdAdd
                        onClick={() => {
                            addToCart(id)
                            toast.success(`${title} is add into cart `)
                        }}
                        className='text-2xl bg-[#FF6600] cursor-pointer font-extrabold border-1 hover:scale-105 h-5 w-5 flex items-center justify-center rounded-full text-center ' />
                </span>

            </span>

        </div>
    )
}

export default FoodCart
import React, { useContext, useState } from 'react'

import { StoreContext } from '../context/StoreContex';
import FoodCart from './FoodCart';
{/* this is minus icon*/ }

function ExporeMenu() {

    const { foodList, categories } = useContext(StoreContext);

    const [category, setCategory] = useState("All")
    console.log(category);


    return (
        <div className='bg-[#F5F5F5] py-1'>
            <h2 className='text-black mx-7  sm:text-2xl text-xl font-bold  text-center my-2'>Your Menu</h2>
            <hr className='text-black bg-black h-[1px]' />
            {/* this is category div */}
            <div className='flex items-center justify-center gap-7 overflow-hidden'>
                {
                    categories.map((item, i) => (
                        <div
                            onClick={() => setCategory((prev) => prev == item.Title ? "All" :  item.Title)}

                            key={i} className='flex items-center cursor-pointer justify-center flex-col my-3' >
                            <img src={item?.image} className={`hover:border-[#FF6600] hover:border-2 hover:scale-110 transition-all duration-700 group rounded-full w-9 sm:w-16 ${category === item.Title ? "Active" : ""}`} alt="" />
                            <p className='text-black font-semibold'>{item.Title}</p>
                        </div>
                    ))
                }
            </div>
            <hr className='text-black bg-black h-[1px]' />
            {/* this is food list div */}
            <div className=' grid sm:grid-cols-4  my-1 mx-2 space-x-5  '>
                {
                    foodList?.map((food, index) => {
                        if (category === "All" || category === food.category) {
                            return (<FoodCart
                                title={food.name}
                                image={food.image_url}
                                rating={food.rating}
                                descripion={food.description}
                                price={food.price}
                                key={index}
                                id={food.id} />)
                        }

                    }
                    )
                }
            </div>
        </div>
    )
}

export default ExporeMenu
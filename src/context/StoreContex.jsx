import { createContext, useEffect, useState } from "react";
import { foodList, categories } from "../components/Metadata";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

const [cartItems,setCartItems]=useState({})


// define a function for addinting items into cart

const addToCart=(id)=>{

    if( !cartItems[id]){
        setCartItems((prev)=>({...prev,[id]:1}))
    }else{
        setCartItems((prev)=>({...prev,[id]:prev[id]+1}))
    }
}

const removeFromCart=(id)=>{
    if(cartItems[id]>0){
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }))
    }
}
    const contextvalue = {
        foodList, categories,
        cartItems, setCartItems, addToCart, removeFromCart
    }


    useEffect(() => {
        console.log("this is your selected products",cartItems);
    }, [cartItems])
    return(
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
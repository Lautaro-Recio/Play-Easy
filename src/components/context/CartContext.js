import { createContext, useState } from "react";
import { Children } from "react";

export const CartContext = createContext()

const CartContextProvider = () =>{
    const [cart, setCart] =useState([]);
    const addCart=(cantidad,item)=>{
        console.log(cantidad,item)
        //setCart(cantidad,item)
    }
    
    console.log(cart)
    return( 
        <CartContext.Provider value={{cart,addCart}}>
            {Children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
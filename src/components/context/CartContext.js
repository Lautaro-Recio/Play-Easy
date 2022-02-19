import { createContext, useState } from "react";
export const CartContext = createContext()

const CartContextProvider = ({children}) =>{
    const [cart, setCart] =useState([]);
    console.log(cart.id)
    const addCart=(cantidad,item)=>{
        setCart([...cart,{...item,cantidad}])
    }
    const repetido=(id)=>{
        console.log(id)
        const prodRepetido = cart.some((prod)=> prod.id === 1)
        console.log(prodRepetido)
    }
    return( 
        <CartContext.Provider value={{cart,addCart, repetido}}>
            {children}
        </CartContext.Provider>
    )
}

export default {CartContextProvider}
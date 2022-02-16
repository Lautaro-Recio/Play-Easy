import { createContext } from "react";
import { Children } from "react/cjs/react.production.min";

export default function CartContext({products}){
    const CartContext = createContext()
    return(<CartContext>
        {Children}
    </CartContext>)
}

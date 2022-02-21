import { createContext, useState } from "react";
export const CartContext = createContext()

const CartContextProvider = ({children}) =>{
    const [cart, setCart] =useState([]);

    const addCart=(cantidad,item)=>{
        console.log(item)    
        if(isOnCart(item.id)){
            //sumar Cantidad
            sumarCantidad(cantidad,item)
        } else {            
            setCart([...cart, { ...item, cantidad }]);
        }
    }
    //Esta repetido el producto
    const isOnCart = (id) => {
        //.some por si encuentra algo en el carrito
        const respuesta = cart.some((prod) => prod.id === id)
        console.log(respuesta)
        return respuesta
    }

    //Setea el carrito en 0 y por eso se borran todos los productos agregados
    const clearCart = () =>{
        setCart([])
        console.log(cart)
    }

    //Solo falta sacar un producto seleccionado del carrito
    //Que el producto que pasaste te envie el id del item, hacer un some con el id del carrito y ahi sacarlo del array y asi va a cambiar
    //el estado del array y por ende cambia el grafico del carrito
    const removeItem = (id) =>{
        console.log(id)
        setCart(cart.filter((prod) => prod.id !== id))
        console.log(cart)
    }

    //sumar cantidad 
    const sumarCantidad =(cantidad,item)=>{
        const copia = [...cart]
        console.log(copia)
        copia.forEach((producto) => {
            console.log(producto.cantidad)
            console.log(item.id)
            if (producto.id === item.id){
                producto.cantidad += cantidad
            }
        })
    }
    
    return( 
        <CartContext.Provider value={{cart,addCart,clearCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
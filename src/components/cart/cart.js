import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './cart.css'


export default function Cart(){
    const {cart,clearCart, removeItem} = useContext(CartContext)
    console.log(cart)
    return (
        <>
                {cart.lengh === 0 ?
                (
                    <>
                        <h4>Todavia no compraste nada? pasate por mis productos</h4>
                    
                    </>


                ) : (
                    <div>
                        {cart.map((producto)=>{
                            return(
                                <div key={producto.id}>
                                    <h2>{producto.title}</h2>
                                    <h3>Cantidad: {producto.cantidad}</h3>
                                    <button onClick={()=>removeItem(producto.id)} >x</button>
                                </div>
                            )   
                        })}
                        <button onClick={clearCart}>Vaciar Carrito</button>

                    </div>
                )
                }
        </>

      
    )
}
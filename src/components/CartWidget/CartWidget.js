import image from '../../assets/imgs/carrito.png'
import './CartWidget.css'
import { useContext,useEffect,useState } from 'react'
import { CartContext } from '../context/CartContext'

export default function CartWidget(){
    const {totalProds} = useContext(CartContext)
    
    
    return(
        <div>
            {totalProds === 0 ?(
                 <img className='carrito' src={image} alt="Carrito de compras" />
            ):(
                <>
                    <p className='cartP'>{totalProds}</p>
                    <img className='carrito' src={image} alt="Carrito de compras" />
                </>
            )

            }
        </div>
    )  


}

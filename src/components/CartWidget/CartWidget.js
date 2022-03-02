import image from '../../assets/imgs/carrito.png'
import './CartWidget.css'
import { useContext,useEffect,useState } from 'react'
import { CartContext } from '../context/CartContext'

export default function CartWidget(){
    const {cart} = useContext(CartContext)
    const [totalProds,setTotalprods]= useState(0)
    useEffect(function (){
        const copia2 = [...cart]
        let total =0
        copia2.forEach(element => {
            total = total+element.cantidad
            setTotalprods(total)
        });
        if (cart.length === 0){
            total =0
            setTotalprods(total)
        }
    },[cart])
    
    return(
        <div>
            {totalProds === 0 ?(
                 <img className='carrito' src={image} alt="Carrito de compras" />
            ):(
                <>
                    <p>{totalProds}</p>
                    <img className='carrito' src={image} alt="Carrito de compras" />
                </>
            )

            }
        </div>
    )  


}

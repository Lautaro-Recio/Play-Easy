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
        console.log(cart.length)   
        console.log(total) 
    },[cart])
    

    return(
        <div>
            <p>{totalProds}</p>
            <img className='carrito' src={image} alt="Carrito de compras" />
        </div>
    )  

}

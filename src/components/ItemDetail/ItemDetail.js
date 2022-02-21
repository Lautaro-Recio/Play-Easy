import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export default function ItemDetail({products}){
    const [cantidad, setCantidad] = useState()
    const {cart,addCart} = useContext(CartContext)

    
    /* Agregar al carrito */
    function onAddToCart(cantidad){
        setCantidad(cantidad)
        addCart(cantidad,products)
    }
    
    return(   
  
            
                <div key={products.id} className='col-md-12 divCards'>
                    <div className="cardsDetail">
                        <div>
                            <img className='logo' src={products.console} />
                            <img className='imgsProds' src={products.img} alt={products.title} />
                        </div>
                        <p>$ {products.price}</p> 
                        {/* Cuando se añada un products al carrito ItemCount desaparece */}

                        {
                            ! cantidad ? 
                            <ItemCount initial={1} stock={products.stock} onAdd={onAddToCart} />:
                            <Link to='/cart'> <button className='botonCard'>Ir al carrito</button></Link>
                        }   
                    
                    </div>
                    <div className="detalle">
                        <h4>{products.title}</h4>   
                        <p>{products.description}</p>
                        <p>Edad minima {products.edad}</p>
                    </div>
                </div>
            
       

    )  
}
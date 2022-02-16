import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"


export default function ItemDetail({products}){
    const [cantidad, setCantidad] = useState()
    /* Agregar al carrito */
    function onAddToCart(value){
        console.log(value)
        setCantidad(value)
    }
    
    return(   
        products.map(function(producto){
            return(
                <div className='col-md-12 divCards'>
                    <div className="cardsDetail">
                        <div>
                            <img className='logo' src={producto.console} />
                            <img className='imgsProds' src={producto.img} alt={producto.title} />
                        </div>
                        <p>$ {producto.price}</p> 
                        {/* Cuando se añada un producto al carrito ItemCount desaparece */}

                        {
                            ! cantidad ? 
                            <ItemCount initial={1} stock={producto.stock} onAdd={onAddToCart} />:
                            <Link to='/cart'> <button className='botonCard'>Ir al carrito</button></Link>
                        }   
                    
                    </div>
                    <div className="detalle">
                        <h4>{producto.title}</h4>   
                        <p>{producto.description}</p>
                        <p>Edad minima {producto.edad}</p>
                    </div>
                </div>
            )
        })

    )  
}
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"



export default function ItemDetail({products}){
    const [cantidad, setCantidad] = useState()
    const {addCart} = useContext(CartContext)
    
    /* Agregar al carrito */
    function onAddToCart(cantidad){
        setCantidad(cantidad)
        addCart(cantidad,products)
    }
    
    return(   
        <>
            {products.plataforma === "xbox" ?(
                <>
                    <div key={products.id} className='divCards'>
                        <div className="cardsDetailXbox">
                            <div>
                                <img className='logoXbox' src={products.console} />
                                <img className='imgsProds' src={products.img} alt={products.title} />
                            </div>
                            <p>$ {products.price}</p> 

                            {
                                ! cantidad ? 
                                <ItemCount initial={1} stock={products.stock} onAdd={onAddToCart} />:
                                <Link to='/cart'> <button className='botonCard'>Ir al carrito</button></Link>
                            }   
                        
                        </div>
                        <div className="detalleXbox">
                            <h4>{products.title}</h4>   
                            <p>{products.description}</p>
                            <p>Edad minima {products.edad}</p>
                        </div>
                    </div>
                </>
            ):products.plataforma === "ps" ?(
                <>
                    <div key={products.id} className=' divCards'>
                        <div className="cardsDetailPlay">
                            <div>
                                <img className='logoPlay' src={products.console} />
                                <img className='imgsProds' src={products.img} alt={products.title} />
                            </div>
                            <p>$ {products.price}</p> 

                            {
                                ! cantidad ? 
                                <ItemCount initial={1} stock={products.stock} onAdd={onAddToCart} />:
                                <Link to='/cart'> <button className='botonCard'>Ir al carrito</button></Link>
                            }   
                        
                        </div>
                        <div className="detallePlay">
                            <h4>{products.title}</h4>   
                            <p>{products.description}</p>
                            <p>Edad minima {products.edad}</p>
                        </div>
                    </div>
                </>
            ):products.plataforma === "pc" ?(
                <>
                    <div key={products.id} className=' divCards'>
                        <div className="cardsDetailPc">
                            <div>
                                <img className='logoPc' src={products.console} />
                                <img className='imgsProds' src={products.img} alt={products.title} />
                            </div>
                            <p>$ {products.price}</p> 

                            {
                                ! cantidad ? 
                                <ItemCount initial={1} stock={products.stock} onAdd={onAddToCart} />:
                                <Link to='/cart'> <button className='botonCard'>Ir al carrito</button></Link>
                            }   
                        
                        </div>
                        <div className="detallePc">
                            <h4>{products.title}</h4>   
                            <p>{products.description}</p>
                            <p>Edad minima {products.edad}</p>
                        </div>
                    </div>
                </>
            ):(
                <>
                <div key={products.id} className=' divCards'>
                    <div className="cardsDetailComplementos">
                        <div>
                            <img className='logoComplementos' src={products.console} />
                            <img className='imgsProds' src={products.img} alt={products.title} />
                        </div>
                        <p>$ {products.price}</p> 

                        {
                            ! cantidad ? 
                            <ItemCount initial={1} stock={products.stock} onAdd={onAddToCart} />:
                            <Link to='/cart'> <button className='botonCard'>Ir al carrito</button></Link>
                        }   
                    
                    </div>
                    <div className="detalleComponentes">
                        <h4>{products.title}</h4>   
                        <p>{products.description}</p>
                    </div>
                </div>
            </>
            )
                
            }
            
            </>
       

    )  
}
import { useContext,useState,useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import './cart.css'
import {Link} from 'react-router-dom'
import Lottie from 'react-lottie'
import emptyBox from '../../assets/animacionesLottie/629-empty-box.json'
import basurero from '../../assets/imgs/basurero.png'




export default function Cart(){
    const {cart,clearCart, removeItem,boughtCart,checkOut,direccion,direccionChange,check} = useContext(CartContext)

    const defaultOptions = {
        loop: true,
        autoplay:true,
        renderSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        direccion: /^.{4,30}$/,
        gmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    const [totalPrice,setTotalprice]= useState(0)
    useEffect(function (){
        const copia3 = [...cart]
        let total =0
        let totalProduct=0
        copia3.forEach(element => {
            totalProduct= element.price*element.cantidad
            total = total+totalProduct
            setTotalprice(total)
        });
    },[cart])
    
    return (
        <>
                {cart.length === 0 ? (
                    <>  
                        <h4 className='h4'>Todavia no compraste nada? pasate por mis productos</h4>
                        <Lottie  options={{animationData: emptyBox, defaultOptions}} width={150} height={200}/>
                        <Link to='/'> <h4 className='h4'>volver a comprar</h4></Link>
                    </>


                ) : (
                    <div className='divGeneral'>
                        {cart.map((producto)=>{
                            return(

                                producto.plataforma === "xbox" ? (
                                    
                                        <div className='divCartXbox' key={producto.id}>
                                            <img src={producto.img} alt={producto.title} />
                                            <div>
                                                <p>{producto.title}</p>
                                            </div>
                                            <div>
                                                <p>$ {producto.price*producto.cantidad}</p>
                                            </div>
                                            <div>
                                                <p>Edad minima: {producto.edad}</p>   
                                            </div>
                                            <div>
                                                <p>Cantidad: {producto.cantidad}</p>
                                            </div>
                                            <div>
                                                <button className='removeItem' onClick={()=>removeItem(producto.id)} ><img src={basurero} alt="Basurero" /></button>                        
                                            </div>                              
                                        </div>
                                    ):(
                                        <div className='divCartPlay' key={producto.id}>
                                        <img src={producto.img} alt={producto.title} />
                                        <div>
                                            <p>{producto.title}</p>
                                        </div>
                                        <div>
                                            <p>$ {producto.price*producto.cantidad}</p>
                                        </div>
                                        <div>
                                            <p>Edad minima: {producto.edad}</p>   
                                        </div>
                                        <div>
                                            <p>Cantidad: {producto.cantidad}</p>
                                        </div>
                                        <div>
                                            <button className='removeItem' onClick={()=>removeItem(producto.id)} ><img src={basurero} alt="Basurero" /></button>                        
                                        </div>                              
                                    </div> 
                                    )
                            )
                        
                            
                        })}
                        <p className='total'>Total: $ {totalPrice}</p>
                        <button className='clearCart' onClick={clearCart}>Vaciar Carrito</button>
                        <button className='clearCart' onClick={checkOut}>Comprar! </button>

                        {check=== true?
                            (
                                <div>
                                    <p>Carga la direccion a donde quieres que lleguen tus productos!</p>
                                    <form action="">
                                    
                                        <div>
                                            <label>Direccion</label>
                                            <input value={direccion} onChange={direccionChange} type="text" id='direcc' />
                                        </div>
                                    
                                        <button disabled={(expresiones.direccion.test(direccion)===false)} onClick={boughtCart}>Finalizar compra </button>
                                    </form>
                                </div>
                            ):(
                                <>
                                </>
                            )
                        }

                    </div>
                )
                }
        </>

      
    )
}
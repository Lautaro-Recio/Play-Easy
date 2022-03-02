import { useContext,useState,useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import './cart.css'
import {Link} from 'react-router-dom'
import Lottie from 'react-lottie'
import emptyBox from '../../assets/animacionesLottie/629-empty-box.json'
export default function Cart(){
    const {compraHecha,idCompra,cart,clearCart, removeItem,boughtCart,checkOut,direccion,mail,name,nombreChange,mailChange,direccionChange,check} = useContext(CartContext)

    const defaultOptions = {
        loop: true,
        autoplay:true,
        renderSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    
    /* Expresiones */
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        direccion: /^.{4,30}$/, // 4 a 30 digitos.
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
                                <div className='divCart' key={producto.id}>
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
                                        <button className='removeItem' onClick={()=>removeItem(producto.id)} >x</button>                        
                                    </div>                              
                                </div>
                            )   
                        })}
                        <p className='total'>Total: $ {totalPrice}</p>
                        <button className='clearCart' onClick={clearCart}>Vaciar Carrito</button>
                        <button onClick={checkOut}>Comprar! </button>

                        {check=== true?
                            (
                                <>
                                    <form action="">
                                        <div>
                                            <label>Nombre y Apellido</label>
                                            <input value={name} onChange={nombreChange} type="text" id='name' />
                                        </div>
                                        <div>
                                            <label>Direccion</label>
                                            <input value={direccion} onChange={direccionChange} type="text" id='direcc' />
                                        </div>
                                        <div>
                                            <label>Mail</label>
                                            <input value={mail} onChange={mailChange} type="text" id='mail' />
                                        </div>
                                        <button disabled={(expresiones.nombre.test(name)===false) | (expresiones.gmail.test(mail)===false) | (expresiones.direccion.test(direccion)===false)} onClick={boughtCart}>Finalizar compra </button>
                                    </form>
                                </>
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
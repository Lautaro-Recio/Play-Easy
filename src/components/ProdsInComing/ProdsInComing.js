import { useEffect, useState } from 'react'
import { getIds } from '../ProdsEnCamino/ProdsEnCamino'
import '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ProdsInComing.css'
import { auth } from '../../Firebase'

function ProdsInComing(){
    const [ids, setIds] = useState([])
        useEffect(function (){
            getIds().then(function(IdsDeCompras){
                setIds(IdsDeCompras)
            })
            
        },[ids])
    return(
       <div className='displayFlex'>
            {auth.currentUser===null ?(
                <>
                    <p>Aqui aparaceran tu historial de compras recientes!</p>
                    
                </>
            )
            :(
                ids.map((compras)=>{
                    return(
                        <div id={compras.id} className='IdDeCompras'>
                            <p>{compras.id}</p>
                            {compras.cart.map((Element)=>{
                                 return(
                                    <div>
                                        <img src={Element.img} alt={Element.title} />
                                        <p>{Element.title}</p>
                                        <p>{Element.cantidad}</p>
                                        <p>{Element.plataforma}</p>
                                        <p>$ {Element.price}</p>
                                    </div>
                                )
                            })}
                        
                            <p>$ {compras.totalPrice}</p>
                            
                        </div>
                    )
                })
            )


            }
       </div> 
    )
    
}

export default ProdsInComing
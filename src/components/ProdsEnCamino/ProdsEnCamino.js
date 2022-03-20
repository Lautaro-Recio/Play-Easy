import { useContext } from "react"
import './ProdsEnCamino.css'
import { NewUsserContext } from "../context/NewUsserContext"
import { collection, getDocs } from "firebase/firestore"
import { auth, dataBase } from "../../Firebase"
import { useEffect, useState } from "react"



export default function ProdsEnCamino(){
    const [ids, setIds] = useState([])
    const{Mail} = useContext(NewUsserContext)
    useEffect(function(){
        if (auth.currentUser !==null){
            getDocs(collection(dataBase, Mail))
            .then(snapshot =>{
                const users = snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
                setIds(users)
            })
        }else{
            setIds([])

        }
    },[Mail])

    return(
        <div key={ids.id} className='ProdEnCamino'>
             {auth.currentUser===null ?(
                 <>
                     <p>Aqui aparaceran tu historial de compras recientes!</p>
                     
                 </>
             )
             :(
                 ids.map((compras)=>{
                     return(
                         <div className='IdDeCompras'>
                             <p>Tu id de compra es: {compras.id}</p>
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
                <p>si tu compra actual no te figura ¡Actualiza la pagina!</p>
        </div> 
     )
        
}

   



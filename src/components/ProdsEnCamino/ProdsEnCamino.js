import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import {Link} from 'react-router-dom'
import './ProdsEnCamino.css'

export default function ProdsEnCamino(){
const {compraHecha,idCompra} = useContext(CartContext)
    return(
    <>
        {compraHecha === true ?(
            <p>Tu compra finalizo correctamente! {idCompra}</p>
        ):(
            <>
                <h4>No tenes ninguna compra hecha</h4>
                <Link to='/'> <h4 className='h4'>volver a comprar</h4></Link>
            </>
        )
        }

    </>
)}

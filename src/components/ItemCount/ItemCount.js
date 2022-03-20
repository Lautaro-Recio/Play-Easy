import React, { useContext, useState } from 'react'
import './ItemCount.css'
import swal from 'sweetalert2'
import { NewUsserContext } from "../context/NewUsserContext"
import { auth } from '../../Firebase'


export default function ItemCount({stock, initial, onAdd}){
    const [SumarRestar, setSumaResta] = useState(initial)
    const {usserLoguado} = useContext(NewUsserContext)

    function sumar(){
        setSumaResta(SumarRestar+1)
        if (SumarRestar === stock){
            setSumaResta(stock)
            swal.fire({
                position: 'top-end',
                title: 'No hay mas stock de este producto en stock',
                timer: 1500,
                showConfirmButton: false,
                background: 'red',
                color:'white',
                fontSize:'2px'

            })
        }
    }
    
    function restar(){
        setSumaResta(SumarRestar-1)
        if (SumarRestar === 1){
            setSumaResta(SumarRestar)
            swal.fire({
                position: 'top-end',
                title: 'No se pueden restar mas items',
                timer: 1500,
                showConfirmButton: false,
                background: 'red',
                color:'white',
                fontSize:'2px'
            })

        }
        
    }

    function addToCart(event){
        onAdd(SumarRestar)
    }

    return(
        <div>
            <p>Stock disponible {stock}</p>
            <div className='contador'>
                <button onClick={restar}>-</button>
                <p className='Cantidad'>{SumarRestar}</p>
                <button onClick={sumar}>+</button>

            </div>
            <button className='botonCard' disabled={(stock===0) | (auth.currentUser===null)} onClick={addToCart}>Comprar</button>
        </div>
    );
}            

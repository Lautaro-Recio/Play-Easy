import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import './ItemCount.css'
import swal from 'sweetalert'

export default function ItemCount({stock, initial, onAdd}){
    const [SumarRestar, setSumaResta] = useState(initial)
    const {totalProducts} = useContext(CartContext)
    function sumar(){
        setSumaResta(SumarRestar+1)
        if (SumarRestar === stock){
            /* Si al restar productos el valor es igual a 1 el valor se iguala a la constante que tiene valor constante*/
            setSumaResta(stock)
            swal({
                icon: 'error',
                position: 'top-end',
                title: 'No hay mas stock de este producto en stock',
                timer: 1500
            })
        }
    }
    
    function restar(){
        setSumaResta(SumarRestar-1)
        if (SumarRestar === 1){
            /* Si al restar productos el valor es igual a 1 el valor se iguala a la constante que tiene valor constante*/
            setSumaResta(SumarRestar)
            swal({
                position: 'top-end',
                icon: 'error',
                title: 'No se pueden restar mas items',
                timer: 1500
            })

        }
        
    }

    function addToCart(event){
        onAdd(SumarRestar)
    }

    return(
        <div>
            <div className='contador'>
                <button onClick={restar}>-</button>
                <p className='Cantidad'>{SumarRestar}</p>
                <button onClick={sumar}>+</button>

            </div>
            <button className='botonCard' onClick={addToCart}>Comprar</button>
        </div>
    );
}            

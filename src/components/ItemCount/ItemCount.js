import React, { useState } from 'react'
import './ItemCount.css'

export default function ItemCount({stock, initial, onAdd}){
    const [SumarRestar, setSumaResta] = useState(initial)

    function sumar(){
        setSumaResta(SumarRestar+1)
        if (SumarRestar === stock){
            /* Si al restar productos el valor es igual a 1 el valor se iguala a la constante que tiene valor constante*/
            setSumaResta(stock)
            alert("No hay mas stock")
        }
    }
    
    function restar(){
        setSumaResta(SumarRestar-1)
        if (SumarRestar === 1){
            /* Si al restar productos el valor es igual a 1 el valor se iguala a la constante que tiene valor constante*/
            setSumaResta(SumarRestar)
            alert("No se pueden restar mas items")

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

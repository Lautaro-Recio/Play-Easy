import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import '../ItemCount/ItemCount'
import { getProducts } from '../Arrays/Arrays'
import '../ItemList/ItemList'
import ItemDetail from '../ItemDetail/ItemDetail'

/* Es Igual que el ItemListContainer solo que con un find */
function ItemDetailContainer({greetings}){
    const [productos, setDetail] = useState([])
        useEffect(function (){
            getProducts().then(function(products){
                const detalle = products.find((prodEncontrado) => prodEncontrado.id === 1);
                console.log(detalle.length)
                /* Tengo que pasar el .find como array (con los corchetes para que lo tome) */
                setDetail([detalle])
            })

        },[])


    
    
    return(
        <div className='row '>
            <h3>{greetings}</h3>
            {productos.length > 0 ? <ItemDetail products={productos}/> : <div className='loader'></div>}
        </div>
    )
    
}

export default ItemDetailContainer
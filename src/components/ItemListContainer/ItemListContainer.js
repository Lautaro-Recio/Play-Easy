import React from 'react'
import './ItemListContainer.css'
import '../ItemCount/ItemCount'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer({imgSrc,prod,greeting,consola}){
    
    function addToCart(){
    
        console.log("se agrego un producto al carrito")

    }
    return(
        <div className='col-md-3 cards '>
            <img className='logo' src={consola} alt={consola} />
            <img className='imgsProds' src={imgSrc} alt={prod} />
            <p>$ {greeting}</p>
            <p>{prod}</p>
            <ItemCount initial={1} stock={10} onAdd={addToCart} />
        </div>
    )  
}

export default ItemListContainer
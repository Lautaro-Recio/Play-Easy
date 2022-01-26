import React from 'react'
import './ItemListContainer.css'


function ItemListContainer({imgSrc,prod,greeting,consola}){
    return(
        <div className='col-md-3 cards '>
            <img className='logo' src={consola} alt={consola} />
            <img className='imgsProds' src={imgSrc} alt={prod} />
            <p>$ {greeting}</p>
            <p>{prod}</p>
            <button>Comprar</button>
        </div>
    )  
}

export default ItemListContainer
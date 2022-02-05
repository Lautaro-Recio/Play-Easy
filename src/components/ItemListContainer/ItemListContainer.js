import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import '../ItemCount/ItemCount'
import { getProducts } from '../Arrays/Arrays'
import '../ItemList/ItemList'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({greetings}){
    const [products, setProducts] = useState([])
        useEffect(function (){
            getProducts().then(function(products){
                setProducts(products)
            })

        },[])


    
    
    return(
        <div className='row '>
            <h3>{greetings}</h3>
            {products.length > 0 ? <ItemList products={products}/> : <div className='loader'></div>}
        </div>
    )
    
}

export default ItemListContainer
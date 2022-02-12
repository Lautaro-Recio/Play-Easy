import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import '../ItemCount/ItemCount'
import { getProducts } from '../Arrays/Arrays'
import '../ItemList/ItemList'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
/* Es Igual que el ItemListContainer solo que con un find */
function ItemDetailContainer({greetings}){
    const [productos, setDetail] = useState([])
    const {prodId} = useParams()
        useEffect(function (){
            getProducts().then(function(products){
                console.log(products)
                const product = products.find((i) =>{
                    return i.id === Number(prodId)
                });;
                console.log(product)
              setDetail(product)

            })

        },[prodId])
    console.log(productos)
    return(
        <div className='row '>
            <h3>{greetings}</h3>
            {<ItemDetail products={[productos]}/>}
        </div>
    )
    
}

export default ItemDetailContainer
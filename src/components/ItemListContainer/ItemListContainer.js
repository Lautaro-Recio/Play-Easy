import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import '../ItemCount/ItemCount'
import { getProducts } from '../Arrays/Arrays'
import '../ItemList/ItemList'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {getDocs,collection,Firestore} from 'firebase/firestore'
import {dataBase} from '../../Firebase'
function ItemListContainer({greetings}){
    const [products, setProducts] = useState([])
    const {categoryName} = useParams()
        useEffect(function (){
            getProducts().then(function(items){
                if (!categoryName){
                    setProducts(items)
                }else{  
                    const category = items.filter((i) =>{
                        return i.plataforma === categoryName
                    });;
                    setProducts(category)
                }
                    
            }
            

                

        )},[categoryName])
        
    
    
    return(
        <div className='row '>
            <h3>{greetings}</h3>
            {products.length > 0 ? <ItemList key={products.id} products={products}/> : <div className='loader'></div>}
        </div>
    )
    
}

export default ItemListContainer
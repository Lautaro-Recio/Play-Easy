import react from "react"
import {getDocs,collection} from 'firebase/firestore'
import { dataBase } from "../../Firebase"
const promesa = new Promise(function(resolve,reject){

        getDocs(collection(dataBase,"items" ))
                .then(snapshot =>{
                    const products = snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
    
                    resolve(products)
                })
                .catch(error=>{
                    reject(error)
                })
})

function getProducts(){
    return promesa;
}

export{
    getProducts,
}
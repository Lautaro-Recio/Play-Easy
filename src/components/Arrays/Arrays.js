import react from "react"
import {getDocs,collection,Firestore} from 'firebase/firestore'
import { dataBase } from "../../Firebase"

const promesa = new Promise(function(resolve,reject){
    getDocs(collection(dataBase, "items"))
            .then(snapshot =>{
                const products = snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
                console.log(snapshot)
                console.log(products)

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
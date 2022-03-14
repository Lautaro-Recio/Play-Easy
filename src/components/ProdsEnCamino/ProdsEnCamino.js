import { useContext } from "react"
import './ProdsEnCamino.css'
import { NewUsserContext } from "../context/NewUsserContext"
import { collection, getDocs } from "firebase/firestore"
import { auth, dataBase } from "../../Firebase"


const promesa2 = new Promise(
    function(resolve,reject){
            const {email} = auth.currentUser
            console.log(email)
        
        getDocs(collection(dataBase, email))
        .then(snapshot =>{
            const users = snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
            console.log(users)
            resolve(users)
        })
        .catch(error=>{
            reject(error)
        })
    }
)
   
function getIds(){
    console.log(promesa2)
    return promesa2
}
export{
    getIds,
}
 


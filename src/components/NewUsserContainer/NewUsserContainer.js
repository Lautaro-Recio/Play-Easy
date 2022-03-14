import './NewUsserContainer.css'
import logoGoogle from '../../assets/imgs/logoGoogle.png'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../Firebase'
import './NewUsserContainer.css'
import { NewUsserContext } from '../context/NewUsserContext'
import { useContext} from "react";


export default function NewUsserContainer (){

    const signInWithGoogle = () =>{

        signInWithPopup(auth,googleProvider)
        .then(result =>{
            console.log(result.user)
        })
        .catch(
            error =>{
                console.log(error.message)
            }
        )
    }
    return(
        < >
          <button  className="ingresar" onClick={signInWithGoogle}><img src={logoGoogle} alt="Logo google" /> <p> Inicia sesion con Google</p> </button>
        </>
        
    )
}
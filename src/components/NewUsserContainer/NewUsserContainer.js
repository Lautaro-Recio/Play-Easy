import './NewUsserContainer.css'
import logoGoogle from '../../assets/imgs/logoGoogle.png'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../Firebase'
import './NewUsserContainer.css'



export default function NewUsserContainer (){

    const signInWithGoogle = () =>{

        signInWithPopup(auth,googleProvider)
    
    }
    return(
        <div className='UsserDiv'>
            <h4>Bienvenido a Play Easy, inicia sesion para utilizar las funcionalidades de la pagina</h4>
          <button  className="ingresar" onClick={signInWithGoogle}><img src={logoGoogle} alt="Logo google" /> <p> Inicia sesion con Google</p> </button>
        </div>
        
    )
}
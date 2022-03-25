import { auth } from "../../Firebase"
import SignOut from "../SignOut/SignOut"
import { NewUsserContext } from "../context/NewUsserContext";
import { useContext} from "react";
import './UsserLogueado.css'

const UsserLogueado =() =>{
    const {setNombreDeUsuario,setMail} = useContext(NewUsserContext)
    const{displayName, photoURL,email} = auth.currentUser
    setMail(email)
    setNombreDeUsuario(displayName)
    
    return(
        <div className="usser">
           
                <img src={photoURL} alt="Avatar" />
                <p className="usserP">{displayName}</p>
            
            <SignOut/>
        </div>
    )
}
export default UsserLogueado;
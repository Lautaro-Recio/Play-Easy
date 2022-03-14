import { auth } from "../../Firebase";
import { NewUsserContext } from "../context/NewUsserContext";
import { useContext} from "react";
import './SignOut.css'

const SignOut = () => {

    const {setUsserLoguado} = useContext(NewUsserContext)

    return auth.currentUser &&(
        <button onClick={()=> auth.signOut()}> Salir</button>
    )
}

export default SignOut;
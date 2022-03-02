import { addDoc, collection } from 'firebase/firestore'
import {createContext, useState} from 'react'
import { dataBase } from '../../Firebase'

export const NewUsserContext=createContext()

const NewUsserProvider = ({children}) => {
    
        const [NombreApellido, setNombreApellido] = useState("")
        const [userName,setUserName] = useState("")
        const [mail, setMail] = useState("")
        const [confirmacionMail,setConfirmacionMail]= useState("")
        const [Contraseña,setContraseña]=useState("")
        const [confirmacionContraseña,setConfirmacionContraseña]=useState("")
        const [registrado,SetRegistrado]=useState(false)
        
        //Funciones que toman los valores de los inputs
        const nameChange = event => setNombreApellido(event.target.value)
        const userNameChange = event => setUserName(event.target.value)
        const mailChange = event => setMail(event.target.value)
        const confirmacionMailChange = event => setConfirmacionMail(event.target.value)
        const ContraseñaChange = event => setContraseña(event.target.value)
        const confirmacionContraseñaChange = event => setConfirmacionContraseña(event.target.value)
    
        const registrar = async (event) => {
            event.preventDefault()
            if (![NombreApellido,userName,mail,confirmacionMail,Contraseña,confirmacionContraseña].some(field => field === "")){
                SetRegistrado(true)
                const ussers = collection(dataBase,"ussers")
                const newUsser ={
                    NombreApellido,
                    userName,
                    mail,
                    confirmacionMail,
                    Contraseña,
                    confirmacionContraseña,
                }
                addDoc(ussers,newUsser)
    
            } else {
                alert("Falta llenar campos")
            }
        }
    return(
        <NewUsserContext.Provider value={{Contraseña,confirmacionContraseña,NombreApellido,userName,mail,confirmacionMail,registrado,nameChange,userNameChange,mailChange,confirmacionMailChange,ContraseñaChange,confirmacionContraseñaChange,registrar}}>
            {children}
        </NewUsserContext.Provider>
    )
}

export default NewUsserProvider
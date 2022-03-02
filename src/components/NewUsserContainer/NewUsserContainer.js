
import { useContext } from 'react'
import { NewUsserContext } from '../context/NewUsserContext'
import './NewUsserContainer.css'

export default function NewUsserContainer (){
    const {Contraseña,confirmacionContraseña,NombreApellido,userName,mail,confirmacionMail,registrado,nameChange,userNameChange,mailChange,confirmacionMailChange,ContraseñaChange,confirmacionContraseñaChange,registrar} = useContext(NewUsserContext)

    return(
        <>
            { registrado===false ? (
                <>
                    <h4>Cargar nuevo Productos</h4>
            
                    <form action="">
                        <div>
                            <label>Nombre y Apellido</label>
                            <input value={NombreApellido} onChange={nameChange} type="text" />
                        </div>
                        <div>
                            <label>Nombre de Usuario</label>
                            <input value={userName} onChange={userNameChange} type="text" />
                        </div>
                        <div>
                            <label>Mail</label>
                            <input value={mail} onChange={mailChange} type="text" />
                        </div>
                        <div>
                            <label>Repita su Mail</label>
                            <input value={confirmacionMail} onChange={confirmacionMailChange} type="text" />
                        </div>
                        <div>
                            <label>Contraseña</label>
                            <input value={Contraseña} onChange={ContraseñaChange} type="text" />
                        </div>
                        <div>
                            <label>Repita su Contraseña</label>
                            <input value={confirmacionContraseña} onChange={confirmacionContraseñaChange} type="text" />
                        </div>     
                        <button type='submit' onClick={registrar}>Registrarse</button>
                    </form>
                </>
            ) : (
                <>
                    <p>¡Usuario Registrado con exito!</p>
                    <p>Hola {NombreApellido}!</p>
                </>
            )}
        </>
        
    )
}
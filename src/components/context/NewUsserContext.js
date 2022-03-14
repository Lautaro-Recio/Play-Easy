import {createContext, useState} from 'react'
import { auth } from '../../Firebase'
import swal from 'sweetalert2'


export const NewUsserContext=createContext()

const NewUsserProvider = ({children}) => {
    const[nombreDeUsuario,setNombreDeUsuario] = useState ("")   
    const[Mail,setMail] = useState ("") 

    if (auth.currentUser===null){

        const Toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', swal.stopTimer)
              toast.addEventListener('mouseleave', swal.resumeTimer)
            }
          })
          
          Toast.fire({
            position: 'center-end',
            title: 'Inicia sesion para comprar',
            background:'red',
            showConfirmButton: false,
            scrollbarPadding: true,
          })
          
    } else{
        const Toast2 = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', swal.stopTimer)
              toast.addEventListener('mouseleave', swal.resumeTimer)
            }
          })
          
          Toast2.fire({
            position: 'top-end',
            title: 'Bienvenido a Play Easy',
            background:'red',
            showConfirmButton: false,
            scrollbarPadding: true,
            timer:1500
          })
    }

    return(
        <NewUsserContext.Provider value={{setNombreDeUsuario,nombreDeUsuario,setMail,Mail}}>
            {children}
        </NewUsserContext.Provider>
    )
}


export default NewUsserProvider
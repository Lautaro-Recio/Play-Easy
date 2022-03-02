import { createContext, useState } from "react";
//import { NewUsserContext } from './NewUsserContext'
import { dataBase } from "../../Firebase";
import { addDoc, collection, getDocs,updateDoc,doc } from 'firebase/firestore'
import { useContext,useEffect } from 'react'
import swal from 'sweetalert'



export const CartContext = createContext()

const CartContextProvider = ({children}) =>{
    //const {NombreApellido,userName,mail,title} = useContext(NewUsserContext)
    
    const [name, setName] =useState("");
    const [direccion, setDireccion] =useState("");
    const [mail, setMail] =useState("");
    const [check, setCheck] =useState(false);
    const [totalPrice,setTotalprice]= useState(0)
    const [idCompra,setIdCompra]= useState("")
    const [compraHecha,setCompraHecha]= useState(false)
    
    
    const nombreChange = event => setName(event.target.value)
    const direccionChange = event => setDireccion(event.target.value)
    const mailChange = event => setMail(event.target.value)

    const [cart, setCart] =useState([]);

    const addCart=(cantidad,item)=>{
        if(isOnCart(item.id)){
            //sumar Cantidad
            sumarCantidad(cantidad,item)
        } else {            
            setCart([...cart, { ...item, cantidad }]);
        }
    }
    //Esta repetido el producto
    const isOnCart = (id) => {
        //.some por si encuentra algo en el carrito
        const respuesta = cart.some((prod) => prod.id === id)
        return respuesta
    }

    //Setea el carrito en 0 y por eso se borran todos los productos agregados
    const clearCart = () =>{
        setCart([])
    }
    const removeItem = (id) =>{
        setCart(cart.filter((prod) => prod.id !== id))
    }

    //sumar cantidad 
    const sumarCantidad =(cantidad,item)=>{
        const copia = [...cart]
        copia.forEach((producto) => {
            if (producto.id === item.id){
                producto.cantidad += cantidad
            }
        })
    }

    
    useEffect(function (){
        const copia3 = [...cart]
        let total =0
        let totalProduct=0
        copia3.forEach(element => {
            totalProduct= element.price*element.cantidad
            total = total+totalProduct
            setTotalprice(total)
        });
    },[cart])
    
    const checkOut = () =>{
        setCheck(true)
    }

    const boughtCart =() =>{
        const compra = collection(dataBase,"compra")
            const fecha = new Date()
            const buyer={
                name,
                mail,
                direccion,
            }
            const newCompra ={
                buyer,
                cart,
                fecha,
                totalPrice,
            }
            addDoc(compra,newCompra)
            .then((carritoComprado)=> {
                setIdCompra(carritoComprado.id)
            })
            swal({
                position: 'top-end',
                icon: 'success',
                title: 'Tu compra se realizo correctamente, podes seguir tu producto en la seccion "En Camino"',
            })
            setCompraHecha(true)
            setCart([])
            //INVESTIGAR EL BATCH PARA ACTUALIZAR EL STOCK
            const copia4 = [...cart]
            copia4.forEach(element => {
                const id = element.id
                console.log(element.stock)
                const stockOfDatabase=element.stock
                const docRef = doc(dataBase,"items",id)

                updateDoc(docRef,{stock:stockOfDatabase-element.cantidad})

            });

    }


    

    


    return( 
        <CartContext.Provider value={{compraHecha,idCompra,totalPrice,cart,addCart,clearCart, removeItem,boughtCart,checkOut,direccion,mail,name,nombreChange,mailChange,direccionChange,check}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
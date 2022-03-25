import { createContext, useState, useContext} from "react";
import { dataBase } from "../../Firebase";
import { addDoc, collection, updateDoc,doc } from 'firebase/firestore'
import { useEffect } from 'react'
import swal from 'sweetalert2'
import { NewUsserContext } from "./NewUsserContext";



export const CartContext = createContext()

const CartContextProvider = ({children}) =>{
    const {nombreDeUsuario,Mail} = useContext(NewUsserContext)
    const [totalProds,setTotalprods]= useState(0)
    const [direccion, setDireccion] =useState("");
    const [check, setCheck] =useState(false);
    const [totalPrice,setTotalprice]= useState(0)
    const [idCompra,setIdCompra]= useState("")
    const [compraHecha,setCompraHecha]= useState(false)
    const [filtro, setFiltro] = useState("")
    const [cart, setCart] =useState([]);

    const filtroOnChange = event => setFiltro(event.target.value)
    const direccionChange = event => setDireccion(event.target.value)
    
    const addCart=(cantidad,item)=>{
        if(isOnCart(item.id)){
            sumarCantidad(cantidad,item)
        } else {            
            setCart([...cart, { ...item, cantidad }]);
        }
    }
    const isOnCart = (id) => {
        const respuesta = cart.some((prod) => prod.id === id)
        return respuesta
    }
    const clearCart = () =>{
        setCart([])
    }
    const removeItem = (id) =>{
        setCart(cart.filter((prod) => prod.id !== id))
    } 
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
    
    useEffect(function (){
        const copia2 = [...cart]
        let total =0
        copia2.forEach(element => {
            total = total+element.cantidad
            setTotalprods(total)
        });
        if (cart.length === 0){
            total =0
            setTotalprods(total)
        }
    },[cart])
    const boughtCart =() =>{
        const compra = collection(dataBase,Mail)
            const fecha = new Date()
            const buyer={
                nombreDeUsuario,
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
            swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu compra se realizo correctamente, podes seguir tu producto en la seccion "En Camino"',
                showConfirmButton: false,
            })
            
            setCompraHecha(true)
            setCart([])

            const copia4 = [...cart]
            copia4.forEach(element => {
                const id = element.id
                const stockOfDatabase=element.stock
                const docRef = doc(dataBase,"items",id)
                updateDoc(docRef,{stock:stockOfDatabase-element.cantidad})

            });

    }


    

    


    return( 
        <CartContext.Provider value={{filtroOnChange,filtro,setFiltro,compraHecha,idCompra,totalPrice,cart,addCart,clearCart, removeItem,boughtCart,checkOut,direccion,direccionChange,check,totalProds}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
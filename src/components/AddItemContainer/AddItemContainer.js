import { addDoc, collection } from 'firebase/firestore'
import {useState} from 'react'
import { dataBase } from '../../Firebase'
import './AddItemContainer.css'
import {ref,getDownloadURL, getStorage, uploadBytes } from 'firebase/storage'


export default function AddItemContainer () {
    const [stock,setStock] = useState("")
    const [image,setImg] = useState("")
    const [title, setTitle] = useState("")
    const [edad,setEdad]= useState("")
    const [price,setPrice]=useState(0)
    const [console,setConsole]=useState("")
    const [plataforma,setPlataforma]=useState("")
    const [description,setDescription]=useState("")
        const stockChange = event => setStock(event.target.value)
    const imgChange = event => setImg(event.target.value)
    const titleChange = event => setTitle(event.target.value)
    const edadChange = event => setEdad(event.target.value)
    const priceChange = event => setPrice(event.target.value)
    const consoleChange = event => setConsole(event.target.value)
    const plataformChange = event => setPlataforma(event.target.value)
    const descriptionChange = event => setDescription(event.target.value)


    const onSubmit = async (event) => {
        event.preventDefault()
        if (![stock,title,edad,price,console,plataforma].some(field => field === "")){

            let img = ""
            if (typeof image !== "undefined"){
                const storage = getStorage()
                const imagename = (+ new Date()).toString(36)
                const storageRef = ref(storage,`items/${imagename}`)

                const uploadTask = await uploadBytes(storageRef,image)
                img = await getDownloadURL(uploadTask.ref)
            }

            const items = collection(dataBase,"items")
            const ItemCargado ={
                stock,
                img,
                title,
                edad,
                price,
                console,
                plataforma,
                description,
            }
            addDoc(items,ItemCargado)

        } else {
            alert("Falta llenar campos")
        }
    }


    return(
        <div>
            <h4>Cargar nuevo Productos</h4>

            <form action="">
                <div>
                    <label>Nombre</label>
                    <input value={title} onChange={titleChange} type="text" />
                </div>
                <div>
                    <label>stock</label>
                    <input value={stock} onChange={stockChange} type="text" />
                </div>
                <div>
                    <label>Edad minima</label>
                    <input value={edad} onChange={edadChange} type="text" />
                </div>
                <div>
                    <label>Precio</label>
                    <input value={price} onChange={priceChange} type="text" />
                </div>
                <div>
                    <label>consola</label>
                    <input value={console} onChange={consoleChange} type="text" />
                </div>
                <div>
                    <label>plataforma(Pc,Xbox, PlayStation)</label>
                    <input value={plataforma} onChange={plataformChange} type="text" />
                </div>    
                <div>
                    <label>Description</label>
                    <input value={description} onChange={descriptionChange} type="text" />
                </div>  
                <div>
                    <label>imagen</label>
                    <input name='file' type='file' onChange={imgChange }/>
                </div> 
                <button type='submit' onClick={onSubmit}>Enviar</button>
            </form>
        </div>
    )
}
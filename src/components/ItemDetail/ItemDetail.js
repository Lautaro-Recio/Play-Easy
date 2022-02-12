import producto from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'
import './ItemDetail.css'
export default function ItemDetail({products}){
    /* Agregar al carrito */
    function addToCart(){
        console.log("se agrego un producto al carrito")
    }
    console.log(products)
    
    return(   
        products.map(function(producto){
            console.log(producto)    
            return(
                <div  className='col-md-12 divCards'>
                    <div className="cards">
                        <div>
                            <img className='logo' src={producto.console} />
                            <img className='imgsProds' src={producto.img} alt={producto.title} />
                        </div>
                        <p>$ {producto.price}</p>
                        <ItemCount initial={1} stock={10} onAdd={addToCart} />
                        
                    </div>
                    <div className="detalle">
                        <h4>{producto.title}</h4>   
                        <p>{producto.description}</p>
                        <p>Edad minima {producto.edad}</p>
                    </div>
                </div>
            )
        })

    )  
}
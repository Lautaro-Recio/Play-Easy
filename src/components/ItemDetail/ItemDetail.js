import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'

export default function ItemDetail({products}){
    /* Agregar al carrito */
    function addToCart(){
    
        console.log("se agrego un producto al carrito")

    }

    return(
        <Link to={'/prods/prodId'}>
        <div  className='col-md-12 divCards'>
            {
                products.map(function(producto){
                    return(
                        <div>
                            <div>
                                <img className='logo' src={Item.console} />
                                <img className='imgsProds' src={Item.img} alt={Item.title} />
                            </div>

                            <p>$ {Item.price}</p>
                            <p>{Item.title}</p>  
                                
                            <ItemCount initial={1} stock={10} onAdd={addToCart} />
                        </div>
                        

                    )
                })
            }
        </div>
        </Link>

    )  
}
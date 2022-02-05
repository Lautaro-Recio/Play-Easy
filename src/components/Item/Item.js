import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
export default function Item({Item}){
    console.log(Item)
    function addToCart(){
    
        console.log("se agrego un producto al carrito")

    }
    return(
        <div className='col-md-3 cards '>
            <div>
                <img className='logo' src={Item.console} />
                <img className='imgsProds' src={Item.img} alt={Item.title} />
            </div>
            <p>$ {Item.price}</p>
            <p>{Item.title}</p>
            <p>Edad Minima {Item.description}</p>
            <ItemCount initial={1} stock={10} onAdd={addToCart} />
        </div>
    )    
}
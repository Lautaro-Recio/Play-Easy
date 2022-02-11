import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
export default function Item({Item}){
    console.log(Item)
    
    return(
        <div className='col-md-3 cards '>
            <Link to={'prods/:prodId'}>
                    <div>
                        <img className='logo' src={Item.console} />
                        <img className='imgsProds' src={Item.img} alt={Item.title} />
                    </div>
                    <p>$ {Item.price}</p>
                    <p>{Item.title}</p>                
            </Link>
        </div>
            
    )    
}
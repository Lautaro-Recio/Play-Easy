import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
export default function Item({Item}){
    
    return(
        <div className='col-md-3 cards '>
            {/* En el link le paso la propiedad Item.Id para que lea el Id de cada producto y asi vaya cambiando */}
            <Link to={`/prods/${Item.id}`}>
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
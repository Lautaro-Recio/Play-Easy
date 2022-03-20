import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
export default function Item({Item}){
    
    return(
    <>
        { Item.plataforma === "xbox" ?(
            <>
                <div className='cardsXbox '>
                    {/* En el link le paso la propiedad Item.Id para que lea el Id de cada producto y asi vaya cambiando */}
                    <Link to={`/prods/${Item.id}`}>
                        <div>
                            <img className='logoXbox' src={Item.console} />
                            <img className='imgsProds' src={Item.img} alt={Item.title} />
                        </div>
                        <p>$ {Item.price}</p>
                        <p>{Item.title}</p>                
                            
                            
                    </Link>
                </div>            
            </>
        ): Item.plataforma === "ps" ?  (
            <>
                <div className='cardsPlay '>
                    {/* En el link le paso la propiedad Item.Id para que lea el Id de cada producto y asi vaya cambiando */}
                    <Link to={`/prods/${Item.id}`}>
                        <div>
                            <img className='logoPlay' src={Item.console} />
                            <img className='imgsProds' src={Item.img} alt={Item.title} />
                        </div>
                        <p>$ {Item.price}</p>
                        <p>{Item.title}</p>                
                            
                            
                    </Link>
                </div>
                <br />
            </>
        ): Item.plataforma === "pc" ?  (
            <>
                <div className='cardsPc '>
                    {/* En el link le paso la propiedad Item.Id para que lea el Id de cada producto y asi vaya cambiando */}
                    <Link to={`/prods/${Item.id}`}>
                        <div>
                            <img className='logoPc' src={Item.console} />
                            <img className='imgsProds' src={Item.img} alt={Item.title} />
                        </div>
                        <p>$ {Item.price}</p>
                        <p>{Item.title}</p>                
                            
                            
                    </Link>
                </div>
                <br />
            </>
        ):(
            <>
                <div className='cardsComplementos '>
                    {/* En el link le paso la propiedad Item.Id para que lea el Id de cada producto y asi vaya cambiando */}
                    <Link to={`/prods/${Item.id}`}>
                        <div>
                            <img className='logoComplementos' src={Item.console} />
                            <img className='imgsProds' src={Item.img} alt={Item.title} />
                        </div>
                        <p>$ {Item.price}</p>
                        <p>{Item.title}</p>                
                            
                            
                    </Link>
                </div>
                <br />
            </>
        )
                        
        } 
    </>


    )}
import './Item.css'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Item({Item}){
    
    return(
    <>

        { Item.plataforma === "xbox" ?(
                <>

                    <div className='cardsXbox '>
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
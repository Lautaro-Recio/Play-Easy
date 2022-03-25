import Item from '../Item/Item'
import './ItemList.css'
import Carrousel from'../Carrousel/Carrousel'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination  } from 'swiper';
import { useContext } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CartContext } from '../context/CartContext';

export default function ItemList({products}){
    const {filtro}=useContext(CartContext)

    function search(prod){
        console.log(prod)
        
        return function(x){
            return x.title.toUpperCase().toLowerCase().includes(prod) || !prod
        }
    }
    return(
        <>
            <Carrousel/>
                <h4 className="gamingFont">Play Station</h4>
                <Swiper modules={[Navigation, Pagination ]} spaceBetween={50} slidesPerView={4} navigation pagination={{ clickable: true }} >                
                {
                    products.filter(search(filtro)).map(function(producto){
                        return(
                            producto.plataforma==="ps"?(

                                <SwiperSlide>
                                    <Item key={producto.id} Item={producto}/>
                                </SwiperSlide>
                            ):(
                                <></>
                            )  
                        )
                    })
                }
            </Swiper>
            <h4 className="gamingFont">PC</h4>

            <Swiper modules={[Navigation, Pagination ]} spaceBetween={50} slidesPerView={4} navigation pagination={{ clickable: true }} >                
                {
                    products.filter(search(filtro)).map(function(producto){
                        return(
                            producto.plataforma==="pc"?(

                                <SwiperSlide>
                                    <Item key={producto.id} Item={producto}/>
                                </SwiperSlide>
                            ):(
                                <></>
                            )  
                        )
                    })
                }
            </Swiper>
                <h4 className="gamingFont">Xbox</h4>

                <Swiper modules={[Navigation, Pagination ]} spaceBetween={50} slidesPerView={4} navigation pagination={{ clickable: true }} >                
                {
                    products.filter(search(filtro)).map(function(producto){
                        return(
                            producto.plataforma==="xbox"?(

                                <SwiperSlide>
                                    <Item key={producto.id} Item={producto}/>
                                </SwiperSlide>
                            ):(
                                <></>
                            )  
                        )
                    })
                }
            </Swiper>
                <h4 className="gamingFont">Complementos</h4>

                <Swiper modules={[Navigation, Pagination ]} spaceBetween={50} slidesPerView={4} navigation pagination={{ clickable: true }} >                
                {
                    products.filter(search(filtro)).map(function(producto){
                        return(
                            producto.plataforma==="complementos"?(

                                <SwiperSlide>
                                    <Item key={producto.id} Item={producto}/>
                                </SwiperSlide>
                            ):(
                                <></>
                            )  
                        )
                    })
                }
            </Swiper>
            


   
      

        </>
    )  
}
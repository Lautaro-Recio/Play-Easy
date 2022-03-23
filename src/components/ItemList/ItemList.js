import Item from '../Item/Item'
import Carrousel from'../Carrousel/Carrousel'
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ItemList({products}){
    return(
        <>
            <Carrousel/>
                <h4>Playstation</h4>
            <Swiper spaceBetween={50}slidesPerView={5}>
                {
                    products.map(function(producto){
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
            <h4>Xbox</h4>

            <Swiper spaceBetween={50}slidesPerView={5}>
                {
                    products.map(function(producto){
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
                <h4>Pc</h4>

            <Swiper spaceBetween={50}slidesPerView={5}>
                {
                    products.map(function(producto){
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
                <h4>Complementos</h4>

            <Swiper spaceBetween={50}slidesPerView={5}>
                {
                    products.map(function(producto){
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
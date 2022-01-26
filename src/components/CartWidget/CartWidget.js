import image from '../../assets/imgs/carrito.png'
import './CartWidget.css'

export default function CartWidget(){
    return(
        <img className='carrito' src={image} alt="Carrito de compras" />
    )  
}

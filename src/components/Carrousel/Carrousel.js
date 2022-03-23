import {Carousel} from 'react-bootstrap'
import publiMine from '../../assets/imgs/PubliMine.jpg'
import publiFifa from '../../assets/imgs/Publififa23.jpg'
import './Carrousel.css'

export default function Carrousel (){
  return(
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block ImgCarrousel  " src={publiMine} alt="Minecraft" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block ImgCarrousel " src={publiFifa} alt="Fifa 23" />
        </Carousel.Item>
      </Carousel>
    </>
  )
}
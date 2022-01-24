
import './NavBar.css';
import logo from '../assets/imgs/logo.png'
import SubMenu from './SubMenu';

export default function NavBar (){
    return(
        <div>
            <ul>
                <img src={logo} alt="Logo Play Easy" />
                <input type="text" />
                <li>
                    <a href="#">Compras</a>
                </li>
                <li className='botonSub'>
                    <a href='#' id='subMenu'  >Productos</a>
                    <SubMenu/>
                </li>
                <li>
                    <a href="#">En camino</a>
                </li>
                <li className='log'>
                    <a href="#">Log In</a>
                </li>
            </ul>
        </div>
    );
};

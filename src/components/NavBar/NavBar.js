
import './NavBar.css';
import logo from '../../assets/imgs/logo.png'
import SubMenu from '../SubMenu/SubMenu';
import CartWidget from '../CartWidget/CartWidget'

export default function NavBar (){
    return(
        <div>
            <ul>
                <img src={logo} alt="Logo Play Easy" />
                <input type="text" />   
                <li className='botonSub'>
                    <a href='#'>Productos</a>
                    <SubMenu/>
                </li>
                <li>
                    <a type='button'><CartWidget/></a>
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

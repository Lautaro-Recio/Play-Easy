
import './NavBar.css';
import logo from '../../assets/imgs/logo.png'
import SubMenu from '../SubMenu/SubMenu';
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Route } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

export default function NavBar (){
    return(
        <div>
            <ul>
                <NavLink to="/"><img src={logo} alt="Logo Play Easy" /></NavLink>
                <input type="text" />   
                <li className='botonSub'>
                    <NavLink to="/">Productos</NavLink>
                    <SubMenu/>
                    {/* Esto se hace para mostrar una categoria en espec */}
                </li>
                <li>
                    <NavLink to="/"><CartWidget/></NavLink>
                </li>
                <li>
                    <NavLink to="/">En camino</NavLink>
                </li>
                <li className='log'>
                    <NavLink to="/">Log In</NavLink>
                </li>
            </ul>
        </div>
    );
};


import './NavBar.css';
import logo from '../../assets/imgs/logo.png'
import SubMenu from '../SubMenu/SubMenu';
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Route } from 'react-router-dom';
import { NewUsserContext } from '../context/NewUsserContext'
import { useContext } from 'react'

export default function NavBar (){
    const {registrado,userName} = useContext(NewUsserContext)


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
                    <NavLink to="/cart"><CartWidget/></NavLink>
                </li>
                <li>
                    <NavLink to="/enCamino">En camino</NavLink>
                </li>
                <li className='log'>
                    {registrado===true ?
                    (<>
                        <p>${userName}</p>
                    </>)
                    :(
                        <NavLink to="/register">Log In</NavLink>
                    )

                    }
                </li>
            </ul>
        </div>
    );
};


import './NavBar.css';
import logo from '../../assets/imgs/logo.png'
import SubMenu from '../SubMenu/SubMenu';
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom';
import UsserLogueado from '../UsserLogueado/UsserLogueado';
import { useEffect, useState } from 'react';
import { auth } from '../../Firebase';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function NavBar (){
    const [user,setUser]= useState(()=>auth.currentUser)
    const [init, setInit] = useState(true)
    const {filtro, filtroOnChange}=useContext(CartContext)

    useEffect(()=>{
        const userListener = auth.onAuthStateChanged(user =>{
        if (user){
            setUser(user)
        } else {
            setUser(false)
        }

        if(init) {
            setInit(false)
        }
        })
        return userListener
    },[init])    

    return( 
        <div>
            <ul>
                <NavLink to="/"><img src={logo} alt="Logo Play Easy" /></NavLink>
                <input type="text" value={filtro} onChange={filtroOnChange}  />   
                <li className='botonSub'>
                    <NavLink to="/">Productos</NavLink>
                    <SubMenu/>
                </li>
                <li>
                    <NavLink to="/cart"><CartWidget/></NavLink>
                </li>
                <li>
                    <NavLink to="/enCamino">En camino</NavLink>
                </li>
                <li className='log'>
                        {user ? <UsserLogueado/>:<NavLink to="/register">Log In</NavLink>}
                </li>
            </ul>
        </div>
    );
};

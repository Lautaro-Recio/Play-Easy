
import './NavBar.css';
import logo from '../../assets/imgs/logo.png'
import SubMenu from '../SubMenu/SubMenu';
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Route } from 'react-router-dom';
import { NewUsserContext } from '../context/NewUsserContext'
import { useContext } from 'react'
import UsserLogueado from '../UsserLogueado/UsserLogueado';
import { useEffect, useState } from 'react';
import { auth } from '../../Firebase';

export default function NavBar (){
    const [user,setUser]= useState(()=>auth.currentUser)
    const [init, setInit] = useState(true)

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
                        {user ? <UsserLogueado/>:<NavLink to="/register">Log In</NavLink>}
                </li>
            </ul>
        </div>
    );
};

import './SubMenu.css'
import { NavLink,Route } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
    export default function SubMenu(){
        return(
            <ul className='subMenu'>
                    <li>
                        <NavLink to="category/ps">Play Station</NavLink>
                    </li>
                    <li>
                        <NavLink to="category/xbox">Xbox</NavLink>
                    </li>
                    <li>
                        <NavLink to="category/pc">Pc</NavLink>
                    </li>
                    <li>
                        <NavLink to="category/complementos">Complementos</NavLink>
                    </li>
            </ul>
        );
    };
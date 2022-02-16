import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom'
import Cart from './components/Cart/Cart'
import CartContext from './components/context/CartContext';
function App() {
  const {categoryName} = useParams()
  console.log(CartContext)

  return (
      <BrowserRouter>
        <CartContext.Provider value={true}>

          <div className="App">
            <header>
              <NavBar/>
            </header>
            <Routes>
              {/* Muestra todo */}
              <Route path='/' element={
                <div className='container box glowing'>
                  <ItemListContainer greetings={"Todos los Productos"}/>
                </div>}>            
              </Route>
              {/* MUestra el producto seleccionado */}
              <Route path='/prods/:prodId' element={
                <div className='container box glowing'>            
                  <ItemDetailContainer greetings={""}/>
                </div>}>
              </Route>
              {/* Muestra las categorias */}
              <Route path='/category/:categoryName' element={
                <div className='container box glowing'>            
                  <ItemListContainer greetings={""}/>
                </div>}>
              </Route>
              <Route path='/cart' element={
                <div className='container box glowing'>
                  <Cart/>
                </div>}>          
              </Route>            
            </Routes>
          </div>

        </CartContext.Provider>
          
      </BrowserRouter>


    
  );
}

export default App;

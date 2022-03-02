import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart/cart'
import AddItemContainer from './components/AddItemContainer/AddItemContainer'
import NewUsserContainer from './components/NewUsserContainer/NewUsserContainer';
import ProdsEnCamino from './components/ProdsEnCamino/ProdsEnCamino'

function App() {
  return (
      <BrowserRouter>
        

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
              <Route path='/addItem' element={
                <div className='container box glowing'>
                  <AddItemContainer/>
                </div>}>          
              </Route>       
              <Route path='/register' element={
                <div className='container box glowing'>
                  <NewUsserContainer/>
                </div>}>          
              </Route>
              <Route path='/enCamino' element={
                <div className='container box glowing'>
                  <ProdsEnCamino/>
                </div>}>          
              </Route>     
            </Routes>
          </div>          
      </BrowserRouter>


    
  );
}

export default App;

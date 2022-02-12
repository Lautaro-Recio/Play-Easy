import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom'

function App() {
  const {categoryName} = useParams()
  console.log(categoryName)
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


        </Routes>
        
        
        
      </div>
    </BrowserRouter>

    
  );
}

export default App;

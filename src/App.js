import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar/>
        </header>
        <Routes>
          <Route path='/' element={
            <div className='container box glowing'>
              <ItemListContainer greetings={"Productos"}/>
            </div>}>            
          </Route>
          <Route path='/prods/:prodId' element={
            <div className='container box glowing'>            
              <ItemDetailContainer greetings={"Producto encontrado con .find"}/>
            </div>}>
            
          </Route>

        </Routes>
        
        
        
      </div>
    </BrowserRouter>

    
  );
}

export default App;

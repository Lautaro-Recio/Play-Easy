import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <div className='container box glowing'>
                   
        <ItemListContainer greetings={"Productos"}/>
      </div>
      <div className='container box glowing'>            
        <ItemDetailContainer greetings={"Producto encontrado con .find"}/>
      </div>
      
      
    </div>
  );
}

export default App;

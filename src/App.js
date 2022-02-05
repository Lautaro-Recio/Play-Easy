import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <div className='container box glowing'>            
        <ItemListContainer greetings={"Productos"}/>
      </div>
      
      
      
    </div>
  );
}

export default App;

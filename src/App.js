import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import image1 from './assets/imgs/GodOfWar.jpg'
import image2 from './assets/imgs/Resident8.jpg'
import image3 from './assets/imgs/minecraft.jpg'
import image4 from './assets/imgs/RedRedemption.jpg'
import logoPlay from './assets/imgs/logoPlay.png'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-xs-12 divCards'>
            <ItemListContainer consola={logoPlay} imgSrc={image1} greeting={5000} prod="God Of War"/>
            <ItemListContainer consola={logoPlay} imgSrc={image2} greeting={3000} prod="Resident Evil 8 Village"/>
            <ItemListContainer consola={logoPlay} imgSrc={image3} greeting={4150} prod="Minecraft"/>
            <ItemListContainer consola={logoPlay} imgSrc={image4} greeting={2000} prod="Red Dead Redemption 2"/>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Header/Navbar';
import ItemListContainer from './Components/Header/ItemListContainer';
import Intro from './Components/Main/Intro';
import Carousel from './Components/Main/Carousel';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings={"¡Bienvenidos a AlBorder Tiendan Online!"}/>
      <Carousel imgUno={{img:"./images/lake.jpg", altUno:"Imagen provisoria de lago"}} imgDos={{img:"./images/mountain1.jpg", altDos:"Imagen provisoria de montaña 1"}} imgTres={{img:"./images/mountain2.jpg", altTres:"Imagen provisoria de montaña 2"}}/>
      <Intro/>
      <Footer/>
    </div>
  );
}

export default App;

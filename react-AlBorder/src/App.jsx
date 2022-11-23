import './App.css';
import Navbar from './Components/Header/Navbar';
import ItemListContainer from './Components/Header/ItemListContainer';
import Carousel from './Components/Main/Carousel';
import Intro from './Components/Main/Intro';
import Products from './Components/Main/Products';
import Form from './Components/Main/Form';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings={"¡AlBorder Tiendan Online, todo para tu mejor amigo!"}/>
      <Carousel imgUno={{img:"./images/lake.jpg", altUno:"Imagen provisoria de lago"}} imgDos={{img:"./images/mountain1.jpg", altDos:"Imagen provisoria de montaña 1"}} imgTres={{img:"./images/mountain2.jpg", altTres:"Imagen provisoria de montaña 2"}}/>
      <Intro/>
      <Products/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;

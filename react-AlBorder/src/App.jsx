import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import ItemListContainer from "./Components/Header/Products/ItemListContainer";
import ItemDetailContainer from "./Components/Header/Products/ItemDetailContainer";
import Intro from "./Components/Main/Intro";
import Clients from "./Components/Main/Comments/Clients";
import Form from "./Components/Main/Form";
import Footer from "./Components/Footer/Footer";
import Error404 from "./Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar
        tagUno={"Quiénes Somos"}
        tagDos={"Productos"}
        tagTres={"Clientes"}
        tagCuatro={"Contáctanos"}
      />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/Quienes-Somos"} element={<Intro />} />
        <Route path={"/Clientes"} element={<Clients />} />
        <Route path={"/Contáctanos"} element={<Form />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

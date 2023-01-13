import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({ stock , onAdd}) => {
  const [counter, setCounter] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [sold, setSold] = useState(false);
  
  const toastAdd = () =>{ //Notificación que avisa que un producto ha sido agregado al carrito
    toast.success('🐶 Tu producto se agregó al carrito!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const increase = () => counter < itemStock && setCounter(counter + 1);
  const decrement = () => counter > 1 && setCounter(counter - 1);
  const reset = () => setCounter(1); // Hace reset de la cantidad de productos.
  const addToCart = (quantity) =>{
    if (counter <= itemStock) {
      setCounter(1);
      setItemStock(itemStock - quantity);
      setSold(true);
      onAdd(quantity);
      toastAdd();
    }
  }
  useEffect(()=>{
    setItemStock(stock)
  }, [stock])
  return (
    <div>
      <div>
        <span>Cantidad: {counter}</span>
      </div>
      <button onClick={decrement} className="btn btn-primary m-1">
        -
      </button>
      <button onClick={increase} className="btn btn-primary m-1">
        +
      </button>
      <button onClick={reset} className="btn btn-primary m-1">
        Reset
      </button>
      <div>
        {sold ? <Link to={"/cart"} className="btn btn-primary">Terminar Mi Compra</Link> : <button className="btn btn-primary" onClick={() => { addToCart(counter) }}>
          Agregar a Carrito
        </button>}
        <ToastContainer/>
      </div>
    </div>
  );
};

export default ItemCount;

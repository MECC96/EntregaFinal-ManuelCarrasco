import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock , onAdd}) => {
  const [counter, setCounter] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [sold, setSold] = useState(false);
  
  const increase = () => counter < itemStock && setCounter(counter + 1);
  const decrement = () => counter > 1 && setCounter(counter - 1);
  const reset = () => setCounter(1);
  const addToCart = (quantity) =>{
    if (counter <= itemStock) {
      setCounter(1);
      setItemStock(itemStock - quantity);
      setSold(true);
      onAdd(quantity);
    }
  }
  useEffect(()=>{
    setItemStock(stock)
  }, [stock])
  return (
    <div>
      <div>
        <span>Counter: {counter}</span>
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
      </div>
      <div>
        <p className="py-2">
          <span>Stock: {itemStock - counter}</span>
        </p>
      </div>
    </div>
  );
};

export default ItemCount;

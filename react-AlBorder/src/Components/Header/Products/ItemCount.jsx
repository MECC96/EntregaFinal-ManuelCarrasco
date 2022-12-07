import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [counter, setCount] = useState(1);

  const increase = () => counter < stock && setCount(counter + 1);
  const decrement = () => counter > 1 && setCount(counter - 1);
  const reset = () => setCount(1);
  const onAdd = () =>
    stock > 0 &&
    console.log("Agregaste: " + counter + " Productos al Carrito!");

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
        <button className="btn btn-primary" onClick={onAdd}>
          Agregar a Carrito
        </button>
      </div>
      <div>
        <p className="py-2">
          <span>Stock: {stock - counter}</span>
        </p>
      </div>
    </div>
  );
};

export default ItemCount;

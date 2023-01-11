import { useEffect, useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ item }) => {
  const { image, name, description, price, stock } = item;
  const {addItem} = useContext(CartContext);
  const [itemStock, setItemStock] = useState(0);
  const onAdd = (quantity) => {
    setItemStock(itemStock - quantity);
    addItem(item, quantity);
  }
  useEffect(()=>{
    setItemStock(item.stock)
  },[item]);


  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <h1 className="text-center p-3 col-md-4">{name}</h1>
        <div className="col-md-10">
          <div className="card shadow m-5 rounded flex-row p-5">
            <img src={image} className="image-fluid img__detail" alt={name} />
            <div className="card-body d-flex flex-column justify-content-around align-items-center text-center">
              <h2>${price}</h2>
              <p className="text-start text-wrap">{description}</p>
              <ItemCount stock={stock} onAdd={onAdd}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

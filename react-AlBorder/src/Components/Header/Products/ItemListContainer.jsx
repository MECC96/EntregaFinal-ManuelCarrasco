import { useState, useEffect } from "react";
import { products } from "../../../utils/products";
import { customFetch } from "../../../utils/customFetch";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "../../../Loader";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    customFetch(
      id ? products.filter((item) => item.category === id) : products
    , setLoading).then((data) => {
      setItems(data);
    });
  }, [id]);

  return (
    <div className="container">
      {loading ? <Loader/> : <ItemList item={items} />}
    </div>
  );
  
};

export default ItemListContainer;

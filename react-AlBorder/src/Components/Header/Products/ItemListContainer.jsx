import { useState, useEffect } from "react";
import { products } from "../../../utils/products";
import { customFetch } from "../../../utils/customFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    customFetch(
      id ? products.filter((item) => item.category === id) : products
    ).then((data) => {
      setItems(data);
    });
  }, [id]);

  return (
    <div className="container">
      <ItemList item={items} />
    </div>
  );
};

export default ItemListContainer;

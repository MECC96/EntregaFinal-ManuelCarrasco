import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customFetch } from "../../../utils/customFetch";
import { products } from "../../../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    customFetch(products.find((ele) => ele.id === parseInt(id))).then(
      (data) => {
        setItem(data);
      }
    );
  }, [id]);

  return (
    <div className="container my-5">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;

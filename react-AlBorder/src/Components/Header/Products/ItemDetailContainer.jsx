import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products.find(ele => ele.id === parseInt(id))); //Filtrar mi array de productos y devulevo 1 solo objeto
            }, 2000);
        });

        promise.then((data) => {
            setItem(data);
        })
    }, [id]);

    return (
        <div className="container my-5">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;
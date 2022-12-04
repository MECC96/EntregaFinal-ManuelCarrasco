import {useState, useEffect} from "react";
import {products} from "../../../utils/products";
import { customFetch } from "../../../utils/customFetch";
import ItemList from "./ItemList";

const ItemListContainer = () =>{
    const [items , setItems] = useState([]);
    
    useEffect(() => {
        customFetch(products)
            .then(data => {
                setItems(data)
            })
    }, [])
    
    return (
        <div className="container">
            <ItemList item={items}/>
        </div>
    )
}

export default ItemListContainer;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import ItemList from "./ItemList";
import Loader from "../../../Loader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

useEffect(() => { //Se buscan los productos en la DB, por ID.
  const db = getFirestore();
  const itemsCollection = collection(db, "productos");
  
  const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
  
  getDocs(q).then((snapShot) => {
      setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
      ))
      setLoader(false); 
  });
}, [id]);

  return (
    <div className="container">
      {loader ? <Loader/> : <ItemList item={items} />}
    </div>
  );
  
};

export default ItemListContainer;

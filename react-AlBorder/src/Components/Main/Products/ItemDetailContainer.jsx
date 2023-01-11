import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "../../../Loader";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true)
  const { id } = useParams();

      // Se hace consulta al documento, usando el ID
      useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "productos", id);
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoader(false);
            } else {
                console.log("El item no se encuentra!");
            }
        });
    }, [id]);

  return (
    <div className="container my-5">
      {loader? <Loader/> : <ItemDetail item={item}/>}
    </div>
  );
};

export default ItemDetailContainer;

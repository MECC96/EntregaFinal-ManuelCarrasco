import { useState, useContext} from "react";
import { CartContext } from "../Context/CartContext";
import { addDoc, doc, collection, getFirestore, updateDoc} from "firebase/firestore";
//import { Navigate } from "react-router-dom";
import Ticket from "./Ticket";

const Checkout = () => {
    const {cart, sumTotal, clearCart} = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [orderId, setOrderId] = useState("");
    
    const [order, setOrder] = useState({});

    const createOrder = () =>{
        const date = new Date();
        const orden = {
            buyer: {name: name, email: email, phone: phone},
            items: cart.map(item => ({id:item.id, title:item.name, quantity:item.quantity, price:item.price, totalPrice:item.quantity * item.price})),
            total: sumTotal(),
            orderDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        }
        setOrder(orden);
        const db = getFirestore();
        const ordersCollection = collection(db, "ordenes");
        addDoc(ordersCollection, orden).then((snapShot) => {
            setOrderId(snapShot.id);
            const generatedOrder = doc(db, "ordenes", snapShot.id); //se selecciona la orden que se va a modificar
            updateDoc(generatedOrder, {total:orden.total}); //se aplica IVA al total y se actualiza

            clearCart();
        });
    }
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Nombre:</label>
                        <input type="text" className="form-control" id="name" placeholder="Escriba su nombre acá" onInput={(event) =>{setName(event.target.value)}} required/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Escriba su email acá" onInput={(event) =>{setEmail(event.target.value)}} required/>
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Teléfono:</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Escriba su número de teléfono acá" onInput={(event) =>{setPhone(event.target.value)}} required/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={createOrder}>Generar Orden</button>
                </form>
                </div>
                <div className="col-md-6">
                    <table className="table table-striped table-hover">
                        <tbody>
                            {cart.map(item=>(
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} width={80}/></td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.quantity * item.price}</td>
                                </tr>))}
                                <tr>
                                    <td>&nbsp;</td>
                                    <th colSpan={2} className="text-end">Total a Pagar (IVA incluido)</th>
                                    <th>${sumTotal()}</th>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                {orderId !== "" ? <Ticket buyer={order} id={orderId}/> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;
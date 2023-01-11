import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { ToastContainer } from 'react-toastify';
const Cart = () => {
    const {cart, cartTotal, clearCart, removeItem, sumTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron Productos en el Carrito!</div>
                        <Link to={"/"} className="btn btn-primary">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-5">Tus Productos</h1>
                <div className="row my-5">
                    <div className="col-md-12">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th><Link onClick={clearCart} className="btn btn-primary" title={"Vaciar Carrito"}>Vaciar Carrito</Link></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item=>(
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} width={80}/></td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.quantity * item.price}</td>
                                    <td><Link onClick={()=> {removeItem(item.id)}} className="btn btn-primary" ><img src={"../images/trash3.svg"} title={"Eliminar Producto"} alt={"Trash can"} /></Link></td>
                                </tr>))}
                                <tr>
                                    <td>&nbsp;</td>
                                    <th colSpan={2} className="text-end">Total a Pagar (IVA incluido)</th>
                                    <th>${sumTotal()}</th>
                                    <td><Link to={"/checkout"} className="btn btn-primary">Finalizar Compra</Link></td>
                                </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Cart
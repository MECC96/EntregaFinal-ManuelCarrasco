import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Badge = ({itemsTotal})=>{
    return (
        <div>
            <Link to={"/cart"} className="btn cart position-relative">
                <img src="../images/cart-check.svg" alt="Cart" title="Cart" width={30}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">{itemsTotal}</span>
            </Link>
        </div>
    )
}

const CartWidget = () => {//Render condicional del ícono del carrito, que depende de si está vacío o no.
    const {cartTotal} = useContext(CartContext);
    
    return cartTotal() > 0 ? <Badge itemsTotal={cartTotal()}/> : "";
}

export default CartWidget;
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);
    return (
        <div>
            <Link to={"/cart"} className="btn cart position-relative">
                <img src="../images/cart-check.svg" alt="Cart" title="Cart" width={30}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">{cartTotal()}</span>
            </Link>
        </div>
    )
}

export default CartWidget
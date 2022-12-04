
const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn cart position-relative">
                <img src="../images/cart-check.svg" alt="Cart" width={30}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">1</span>
            </button>
        </div>
    )
}

export default CartWidget
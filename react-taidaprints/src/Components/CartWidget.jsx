import React from 'react'

function CartWidget() {
    return (
        <div>CartWidget
            <button type="button" className="btn btn-primary position-relative">
                <img src="" alt="" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
            <span className="visually-hidden">unread messages</span>
            </span>
            </button>
        </div>
    )
}

export default CartWidget
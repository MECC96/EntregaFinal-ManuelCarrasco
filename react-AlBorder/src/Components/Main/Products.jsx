import React from 'react'
import Item from './Item'

const Products = () => {
    return (
        <div className="container-fluid">
            <div className="row d-flex my-3">
                <Item img={"./images/border-logo.png"}/>
                <Item img={"./images/border-logo.png"}/>
                <Item img={"./images/border-logo.png"}/>
                <Item img={"./images/border-logo.png"}/>
                <Item img={"./images/border-logo.png"}/>
                <Item img={"./images/border-logo.png"}/>
            </div>
        </div>
    )
}

export default Products

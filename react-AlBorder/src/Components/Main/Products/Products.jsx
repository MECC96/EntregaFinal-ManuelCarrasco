import React from 'react'
import Item from './Item'

const Products = () => {
    return (
        <div className="container-fluid  my-3">
            <h3 className='text-center p-3'>Productos</h3>
            <div className="row d-flex">
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

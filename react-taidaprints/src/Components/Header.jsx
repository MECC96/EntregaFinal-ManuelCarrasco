import React from 'react'
import CartWidget from './CartWidget'
import Navbar from './Navbar'

function Header() {
    return (
        <div className='container'>
            <div className="row mt-3 d-flex align-items-center">
                <div className="col-md-7">
                    <Navbar/>
                </div>
                <div className='col-md-5 d-flex align-items-center justify-content-end'>
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}

export default Header
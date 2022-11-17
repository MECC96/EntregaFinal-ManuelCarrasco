import React from 'react'
import CartWidget from './CartWidget'
import Navbar from './Navbar'

function Header() {
    return (
        <div>
            <div className="col-md-11">
                <Navbar/>
            </div>
            <div className='col-md-11'>
                <CartWidget/>
            </div>
        </div>
    )
}

export default Header
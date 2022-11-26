/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import CartWidget from './CartWidget'

const Navbar = ({tagUno,tagDos,tagTres,tagCuatro}) => {
    return (
        <header className='row my-3 m-0 header'>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg shadow m-3 rounded">
                    <div className='col-md-8 d-flex align-items-center justify-content-center ml-5 '>
                        <a className="navbar-brand mx-3" href="#">
                            <img src="images/border-logo.png" alt="AlBorder logo" width={100}/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav w-100 d-flex justify-content-around">
                                <a className="nav-link" href="/Quienes-Somos">{tagUno}</a>
                                <a className="nav-link" href="/Productos">{tagDos}</a>
                                <a className="nav-link" href="/Clientes">{tagTres}</a>
                                <a className="nav-link" href="/Contáctanos">{tagCuatro}</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 d-flex align-items-center justify-content-end'>
                        <CartWidget/>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
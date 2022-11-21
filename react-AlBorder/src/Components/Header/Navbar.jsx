/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import CartWidget from './CartWidget'

function Nav(props) {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow m-3 bg-body rounded">
                    <a className="navbar-brand" href="#">
                        <img src="images/taidaprints-logo.png" alt="Taidaprints logo" width={88}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav w-100 d-flex justify-content-between">
                            <a className="nav-link" href="/"{...props.tagUno}>{props.tagUno}</a>
                            <a className="nav-link" href="/"{...props.tagDos}>{props.tagDos}</a>
                            <a className="nav-link" href="/"{...props.tagTres}>{props.tagTres}</a>
                            <a className="nav-link" href="/"{...props.tagCuatro}>{props.tagCuatro}</a>
                        </div>
                    </div>
                </nav>
    )
}

function Navbar() {

    return (
        <header className='row my-3 m-0 header'>
            <div className="container-fluid col-md-8">
                <Nav  tagUno={"Quiénes Somos"} tagDos={"Productos"} tagTres={"Clientes"} tagCuatro={"Contáctanos"}/>
            </div>
            <div className='col-md-3 d-flex align-items-center justify-content-end mr-5'>
                <CartWidget/>
            </div>
        </header>
    )
}

export default Navbar
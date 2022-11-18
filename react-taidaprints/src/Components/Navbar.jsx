/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Navbar() {
    return (
        <header>
            <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow m-3 bg-body rounded">
                <a className="navbar-brand" href="#">
                    <img src="images/taidaprints-logo.jpg" alt="Taidaprints logo" width={88}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav w-100 d-flex justify-content-between">
                        <a className="nav-link" href="#">Quiénes Somos</a>
                        <a className="nav-link" href="#">Productos</a>
                        <a className="nav-link" href="#">Clientes</a>
                        <a className="nav-link" href="#">Contáctanos</a>
                    </div>
                </div>
            </nav>
            </div>
        </header>
    )
}

export default Navbar
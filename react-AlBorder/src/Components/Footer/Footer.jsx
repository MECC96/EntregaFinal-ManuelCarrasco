import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="container-fluid header py-2">
            <div className="row">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <div className="col-md-7">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="/"  rel="noreferrer">🐶 Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="/"  rel="noreferrer">🐶 Política de Privacidad</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" href="/"  rel="noreferrer">🐶 Trabaja con Nosotros</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <Link to={"/"}>
                        <img src="../images/border-logo.png" alt="AlBorder logo" width={250} title={"Home"}/>
                    </Link>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <a href="/" className="mx-2"><img src={"/images/facebook.svg"} alt={"Facebook"} width={30} rel="noreferrer" title={"Facebook"}/></a>
                        <a href="/" className="mx-2"><img src={"/images/instagram.svg"} alt={"Instagram"} width={30} rel="noreferrer" title={"Instagram"}/></a>
                        <a href="/" className="mx-2"><img src={"/images/twitter.svg"} alt={"Twitter"} width={30} rel="noreferrer" title={"Twitter"}/></a>
                        <a href="/" className="mx-2"><img src={"/images/whatsapp.svg"} alt={"Whatsapp"} width={30} rel="noreferrer" title={"Whatsapp"}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
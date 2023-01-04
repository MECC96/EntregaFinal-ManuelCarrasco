import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = ({ tagUno, tagDos, tagTres, tagCuatro }) => {
  return (
    <header className="row my-3 m-0 header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg shadow m-3 rounded d-flex justify-content-between">
          <div className="col-md-10 d-flex align-items-center justify-content-center ml-5">
            <NavLink className="navbar-brand mx-3" to={"/"}>
              <img
                src="../images/border-logo.png"
                alt="AlBorder logo"
                title="Home"
                width={100}
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-md-7 d-flex justify-content-between">
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/Quienes-Somos"}>
                    {tagUno}
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    role="button"
                    to={"/Productos"}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {tagDos}
                  </NavLink>
                  <ul className="dropdown-menu drop">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={"/category/Juguetes"}
                      >
                        Juguetes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={"/category/Juguetes-Rellenables"}
                      >
                        Juguetes Rellenables
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={"/category/Juguetes-Interactivos"}
                      >
                        Juguetes Interactivos
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/Clientes"}>
                    {tagTres}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/Contáctanos"}>
                    {tagCuatro}
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex justify-self-end" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-1 d-flex align-self-center justify-content-center">
            <CartWidget />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

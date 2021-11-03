import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src="./logo.png" alt="" width="50" height="44" />
                Dunkers
              </a>
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
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/index">
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      Quienes somos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/menu">
                      Menú
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/service">
                      Servicios
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contáctenos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/map">
                      Mapa del sitio
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNavDarkDropdown"
                    >
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDarkDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-cart-alt car-icon"></i>
                          </a>
                          <div
                            id="buy-car"
                            className="dropdown-menu"
                            aria-labelledby="navbarCollapse"
                          >
                            <table id="car-list" className="table">
                              <thead>
                                <tr>
                                  <th>Imagen</th>
                                  <th>Nombre</th>
                                  <th>Precio</th>
                                  <th>Cantidad</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>

                            <a
                              href="#"
                              id="empty-car"
                              className="btn btn-primary btn-block"
                            >
                              Vaciar Carrito
                            </a>
                            <a
                              href="#"
                              id="buy-process"
                              className="btn btn-danger btn-block"
                            >
                              Finalizar pedido
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>

                <form className="d-flex media">
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-youtube"></i>
                  </a>
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </form>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;

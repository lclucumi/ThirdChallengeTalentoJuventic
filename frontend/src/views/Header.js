import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img src="./logo.png" alt="" width="50" height="44" />
                Dunkers
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/index">
                      Inicio
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">
                      Quienes somos
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/menu">
                      Menú
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/service">
                      Servicios
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">
                      Contáctenos
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/map">
                      Mapa del sitio
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <div
                      class="collapse navbar-collapse"
                      id="navbarNavDarkDropdown"
                    >
                      <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                          <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDarkDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="bx bx-cart-alt car-icon"></i>
                          </a>
                          <div
                            id="buy-car"
                            class="dropdown-menu"
                            aria-labelledby="navbarCollapse"
                          >
                            <table id="car-list" class="table">
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
                              class="btn btn-primary btn-block"
                            >
                              Vaciar Carrito
                            </a>
                            <a
                              href="#"
                              id="buy-process"
                              class="btn btn-danger btn-block"
                            >
                              Finalizar pedido
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>

                <form class="d-flex media">
                  <a href="#" class="facebook">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="bx bxl-youtube"></i>
                  </a>
                  <a href="#" class="twitter">
                    <i class="bx bxl-twitter"></i>
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

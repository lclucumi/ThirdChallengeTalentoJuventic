import React from "react";
import dataMenu from "../json/dataMenu.json";
import MenuPlates from "./menuComponents/MenuPlates";
import { Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
    };
  }

  render() {
    return (
      <>
        <section id="menu">
          <div className="container content-menu" id="list-products">
            <div className="section-title">
              <h2>
                Nuestro <span>Menú</span>
              </h2>
              <a href="../pdf/menu.pdf" download="menu">
                <i className="bx bxs-file-pdf"></i>
              </a>
            </div>

            <Row className="justify-content-md-center">
              {dataMenu.objMenu.map((menu, i) => {
                if (i % 2 == 0) {
                  return (
                    <div id="left_column" key={i}>
                      <MenuPlates
                        i={i}
                        precio={menu.precio}
                        plato={menu.plato}
                        ingredientes={menu.ingredientes}
                        key={menu.precio}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div id="right_column" key={i}>
                      <MenuPlates
                        i={i}
                        precio={menu.precio}
                        plato={menu.plato}
                        ingredientes={menu.ingredientes}
                        key={menu.precio}
                      />
                    </div>
                  );
                }
              })}
            </Row>
          </div>
        </section>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <script src="../js/car.js"></script>
            <script src="../js/order.js"></script>
          </Helmet>
        </div>
        ;
      </>
    );
  }
}

export default Menu;

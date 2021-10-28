import React from "react";
import dataMenu from "../json/dataMenu.json";
import MenuPlates from "./menuComponents/MenuPlates";
import { Row, Col } from "react-bootstrap";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
    };
  }

  onClick(info) {
    this.setState({
      modalState: !info,
    });
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
            {dataMenu.objMenu.map((menu, i) => {
              if (i <= 5) {
                return (
                  <Row className="justify-content-md-center">
                    <Col md="2"></Col>
                    <MenuPlates
                      i={i}
                      precio={menu.precio}
                      plato={menu.plato}
                      ingredientes={menu.ingredientes}
                    />
                    <MenuPlates
                      i={i + 6}
                      precio={menu.precio}
                      plato={menu.plato}
                      ingredientes={menu.ingredientes}
                    />
                    <Col md="2"></Col>
                  </Row>
                );
              }
            })}
          </div>
        </section>
        ;
      </>
    );
  }
}

export default Menu;

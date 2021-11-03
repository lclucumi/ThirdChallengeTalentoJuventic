import React from "react";
import { Col } from "react-bootstrap";
import InfoModal from "./MenuModal";
import imgPlate1 from "../../images/menu/lobster-bisque.jpg";
import imgPlate2 from "../../images/menu/Bread-Barrel.jpg";
import imgPlate3 from "../../images/menu/Crab-Cake.jpeg";
import imgPlate4 from "../../images/menu/Caesar-Selections.jpeg";
import imgPlate5 from "../../images/menu/Bandeja-Paisa.jpg";
import imgPlate6 from "../../images/menu/Cocido.jpg";
//column
import imgPlate7 from "../../images/menu/Tuscan-Grilled.jpg";
import imgPlate8 from "../../images/menu/Mozarella-Stick.jpg";
import imgPlate9 from "../../images/menu/Greek-Salad.jpeg";
import imgPlate10 from "../../images/menu/Lasagna.jpg";
import imgPlate11 from "../../images/menu/Pizza.jpg";
import imgPlate12 from "../../images/menu/Ajiaco-santafereno.jpg";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        imgPlate1,
        imgPlate2,
        imgPlate3,
        imgPlate4,
        imgPlate5,
        imgPlate6,
        imgPlate7,
        imgPlate8,
        imgPlate9,
        imgPlate10,
        imgPlate11,
        imgPlate12,
      ],
    };
  }

  render() {
    return (
      <>
        <Col md="10" className="menu-item-section">
          <Col md="12" className="menu-item-section">
            <Col md="6" className="text-center order-1 order-lg-2">
              <img
                src={this.state.images[this.props.i]}
                alt=""
                className="img-fluid special1 rounded"
              />
            </Col>
            <Col md="12">
              <h6 className="price">
                <strong>{this.props.precio}</strong>
              </h6>
              <InfoModal
                name={this.props.plate}
                ingredients={this.props.ingredients}
                description={this.props.description}
                img={this.props.i}
              />

              <p>{this.props.ingredients}</p>
              <input
                type="number"
                className="form-control cantidadMenu"
                min="1"
              />
              <a
                className="btn btn-outline-warning add-car id-food"
                href="/buy"
                type="button"
                data-id={this.props.i}
              >
                Añadir al carrito
              </a>
            </Col>
          </Col>
        </Col>
      </>
    );
  }
}

export default Menu;

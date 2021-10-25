import React from "react";
import { Row } from "reactstrap";
import data from "../json/dataOutStanding.json";
import img0 from "../images/specials-1.jpg";
import img1 from "../images/specials-2.jpg";
import img2 from "../images/specials-3.jpg";
import img3 from "../images/specials-4.jpg";
import img4 from "../images/specials-5.jpg";

class IndexOutStanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, img: img0 };
  }

  render() {
    return (
      <>
        <section id="destacados">
          <div className="container image-bg">
            <div className="section-title">
              <h2>
                Nuestros platos<span> destacados</span>
              </h2>
              <p>
                Nuestro restaurante cuenta con platos que se ajustan a todos los
                gustos. Te invitamos a ver algunos de nuestros destacados.
              </p>
            </div>

            <Row>
              <div className="col-lg-9 mt-4 mt-lg-0">
                <div className="tab-content">
                  <div
                    className="tab-pane active show"
                    id={data.objOutStanding[this.state.number].id}
                  >
                    <div className="row">
                      <div className="col-lg-4 text-center order-2 order-lg-1">
                        <img
                          src={this.state.img}
                          alt=""
                          className="img-fluid special1"
                        />
                      </div>
                      <div className="col-lg-8 details order-1 order-lg-2">
                        <h3>{data.objOutStanding[this.state.number].title}</h3>
                        <p className="fst-italic">
                          {data.objOutStanding[this.state.number].firstText}
                        </p>
                        <p>
                          {data.objOutStanding[this.state.number].secondText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <ul
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-1"
                      onClick={() => this.setState({ number: 0, img: img0 })}
                    >
                      Cream noodles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-2"
                      onClick={() => this.setState({ number: 1, img: img1 })}
                    >
                      Tropical party salad
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-3"
                      onClick={() => this.setState({ number: 2, img: img2 })}
                    >
                      Soap with Spaguetti al Ragú
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-4"
                      onClick={() => this.setState({ number: 3, img: img3 })}
                    >
                      Ravioles ciboulette
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-5"
                      onClick={() => this.setState({ number: 4, img: img4 })}
                    >
                      House saladt
                    </a>
                  </li>
                </ul>
              </div>
            </Row>
            <div className="btn-menu">
              <a
                className="btn btn-outline-warning"
                href="./pages/menu.html"
                role="button"
              >
                Ver menú completo
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default IndexOutStanding;

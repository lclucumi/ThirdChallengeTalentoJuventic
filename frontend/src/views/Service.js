import React from "react";
import Carousel from "react-bootstrap/Carousel";
import dataServices from "../json/dataServices.json";
import imgService1 from "../images/event-birthday.jpg";
import imgService2 from "../images/event-custom.jpg";
import imgService3 from "../images/event-private.jpg";
import imgService4 from "../images/child-party.jpg";
import imgService5 from "../images/proposal.jpg";
import imgService6 from "../images/anniversary.jpg";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        imgService1,
        imgService2,
        imgService3,
        imgService4,
        imgService5,
        imgService6,
      ],
    };
  }
  render() {
    return (
      <>
        <section id="eventos-section">
          <div className="container">
            <div className="section-title">
              <h2>
                Organización de <span>eventos</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <Carousel>
                  {dataServices.objServices.map((service, i) => {
                    console.log(service);
                    return (
                      <Carousel.Item interval={1000}>
                        <Carousel.Caption>
                          <div className="row">
                            <div className="col-md-6 col-sm-12 image-evento">
                              {console.log(this.state.images[i])}
                              <img
                                src={this.state.images[i]}
                                className="d-block w-100 img-fluid shadow-lg sha"
                                alt="slide1"
                              />
                            </div>
                            <div className="col-md-6 col-sm-12 info-event">
                              <h2>{service.servicio}</h2>
                              <span>{service.precio}</span>
                              <p>{service.descripcion}</p>
                              <ul className="bx-ul">
                                {service.puntos.map(function (point, i) {
                                  return (
                                    <li>
                                      <i className="bx bx-check-double"></i>{" "}
                                      {point[i]}
                                    </li>
                                  );
                                })}
                              </ul>
                              <p>{service.text}</p>
                              <div className="btn-menu">
                                <a
                                  className="btn btn-outline-warning"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#ModalCumple"
                                >
                                  Reserva Ahora
                                </a>
                                <a
                                  className="btn btn-outline-warning"
                                  href="/contact"
                                  role="button"
                                >
                                  Contáctanos
                                </a>
                              </div>
                            </div>
                          </div>
                        </Carousel.Caption>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Services;

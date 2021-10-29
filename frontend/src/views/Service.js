import React from "react";
import Carousel from "react-bootstrap/Carousel";
import dataServices from "../json/dataServices.json";

class Services extends React.Component {
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
                <div
                  id="carouselEventoSection"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselEventoSection"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselEventoSection"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselEventoSection"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselEventoSection"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselEventoSection"
                      data-bs-slide-to="4"
                      aria-label="Slide 5"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselEventoSection"
                      data-bs-slide-to="5"
                      aria-label="Slide 6"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Carousel>
                        {dataServices.objTestimonials.map((service, i) => {
                          <Carousel.Item interval={1000}>
                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>;
                        })}
                      </Carousel>
                      <div className="row">
                        <div className="col-md-6 col-sm-12 image-evento">
                          <img
                            src="../images/event-birthday.jpg"
                            className="d-block w-100 img-fluid shadow-lg sha"
                            alt="slide1"
                          />
                        </div>
                        <div className="col-md-6 col-sm-12 info-event">
                          <h2>Cumpleaños</h2>
                          <span>$120.000</span>
                          <p>
                            Cumplir un año más de vida es un evento que debe
                            celebrarse en grande. Ya sea quieras tener:
                          </p>
                          <ul className="bx-ul">
                            <li>
                              <i className="bx bx-check-double"></i> Fiesta
                              Temática
                            </li>
                            <li>
                              <i className="bx bx-check-double"></i> Casino
                            </li>
                            <li>
                              <i className="bx bx-check-double"></i> Juegos
                              Gigantes para que todos tus invitados se diviertan
                            </li>
                            <li>
                              <i className="bx bx-check-double"></i> Juegos
                              Gigantes para que todos tus invitados se diviertan
                            </li>
                          </ul>
                          <p>Nosotros contamos con todo lo que necesitas.</p>
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
                              href="../pages/contact.html"
                              role="button"
                            >
                              Contáctanos
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Services;

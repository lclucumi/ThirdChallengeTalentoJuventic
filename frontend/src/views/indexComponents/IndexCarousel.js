// React
import React from "react";
import imgSlide1 from "../../images/slide/slide-1.jpg";
import imgSlide2 from "../../images/slide/slide-2.jpg";
import imgSlide3 from "../../images/slide/slide-3.jpg";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: imgSlide1,
    altText: "",
    caption:
      "Si compras una House salad, te puedes llevar la segunda con un \n 50% de descuento ¡Anímate a visitarnos!",
    header: "Descuentos",
    key: "1",
  },
  {
    src: imgSlide2,
    altText: "",
    caption:
      "Todos los viernes y sábados, por la compra de dos Cream \n noodles te damos un tercer plato completamente gratis",
    header: "Promociones",
    key: "2",
  },
  {
    src: imgSlide3,
    altText: "",
    caption:
      "En la sección de destacados encontrarás nuestros platos \n destacados.",
    header: "Recomendados",
    key: "3",
  },
];

class IndexCarousel extends React.Component {
  render() {
    return (
      <>
        <div id="indexCarousel" className="mx-auto">
          <UncontrolledCarousel items={items} />
        </div>
      </>
    );
  }
}

export default IndexCarousel;

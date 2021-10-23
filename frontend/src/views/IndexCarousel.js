// React
import React from "react";
import imgSlide1 from "../images/slide/slide-1.jpg";
import imgSlide2 from "../images/slide/slide-2.jpg";
import imgSlide3 from "../images/slide/slide-3.jpg";
import {
  CarouselCaption,
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
} from "reactstrap";

const items = [
  {
    src: imgSlide1,
    altText: "",
    caption: "Descuentos",
    text: "Si compras una House salad, te puedes llevar la segunda con un \n 50% de descuento ¡Anímate a visitarnos!",
  },
  {
    src: imgSlide2,
    altText: "",
    caption: "Promociones",
    text: "Todos los viernes y sábados, por la compra de dos Cream \n noodles te damos un tercer plato completamente gratis",
  },
  {
    src: imgSlide3,
    altText: "",
    caption: "Recomendados",
    text: "En la sección de destacados encontrarás nuestros platos \n destacados.",
  },
];

class IndexCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="carouselImg"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} class="d-block w-100" />
          <CarouselCaption
            captionText={item.text}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });
    return (
      <>
        <div id="indexCarousel">
          <Carousel
            activeIndex={activeIndex}
            // next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={this.goToIndex}
            />
            {slides}
            <CarouselControl
              hidden="true"
              direction="prev"
              directionText=""
              onClickHandler={this.previous}
            />
            <CarouselControl
              direction="next"
              directionText=""
              onClickHandler={this.next}
            />
          </Carousel>
        </div>
      </>
    );
  }
}

export default IndexCarousel;

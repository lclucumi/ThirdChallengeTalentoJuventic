import React from "react";
import IndexCarousel from "./indexComponents/IndexCarousel";
import IndexAbout from "./indexComponents/IndexAbout";
import IndexOutStanding from "./indexComponents/IndexOutStandind";
import TestimonialCarousel from "./TestimonialCarousel";
import About from "./About";

class Inicio extends React.Component {
  render() {
    return (
      <>
        <IndexCarousel />
        <IndexAbout />
        <IndexOutStanding />
        <TestimonialCarousel />
      </>
    );
  }
}

export default Inicio;

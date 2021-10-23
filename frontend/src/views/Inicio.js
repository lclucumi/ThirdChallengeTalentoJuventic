import React from "react";
import IndexCarousel from "./IndexCarousel";
import IndexAbout from "./IndexAbout";

class Inicio extends React.Component {
  render() {
    return (
      <>
        <IndexCarousel />
        <IndexAbout />
      </>
    );
  }
}

export default Inicio;

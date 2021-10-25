import React from "react";
import IndexCarousel from "./IndexCarousel";
import IndexAbout from "./IndexAbout";
import IndexOutStanding from "./IndexOutStandind";

class Inicio extends React.Component {
  render() {
    return (
      <>
        <IndexCarousel />
        <IndexAbout />
        <IndexOutStanding />
      </>
    );
  }
}

export default Inicio;

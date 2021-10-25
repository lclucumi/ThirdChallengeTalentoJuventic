import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <>
        <section id="menu">
          <div class="container content-menu" id="list-products">
            <div class="section-title">
              <h2>
                Nuestro <span>Menú</span>
              </h2>
              <a href="../pdf/menu.pdf" download="menu">
                <i class="bx bxs-file-pdf"></i>
              </a>
            </div>
            <div class="row"></div>
          </div>
        </section>
        ;
      </>
    );
  }
}

export default Menu;

import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer id="footer">
          <div class="container">
            <h3>Dunkers</h3>
            <p>¡Bienvenido! estás en la página del mejor restaurante.</p>
            <div class="social-links">
              <a href="#" class="facebook">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="#" class="instagram">
                <i class="bx bxl-youtube"></i>
              </a>
              <a href="#" class="twitter">
                <i class="bx bxl-twitter"></i>
              </a>
            </div>
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Dunkers</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;

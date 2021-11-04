import React from "react";
import Header from "./Header";
import Footer from "./Footer";
class Buy extends React.Component {
  obtainProductsLocalStorage() {
    let productLS;

    if (localStorage.getItem("productos") === null) {
      productLS = [];
    } else {
      productLS = JSON.parse(localStorage.getItem("productos"));
    }
    return productLS;
  }

  totalCalculate = () => {
    let productLS;
    let total = 0,
      subtotal = 0,
      igv = 0;
    productLS = this.obtainProductsLocalStorage();
    for (let i = 0; i < productLS.length; i++) {
      let element = Number(productLS[i].precio * productLS[i].cantidad);
      total = total + element;
    }
    igv = parseFloat(total * 0.18).toFixed(2);
    subtotal = parseFloat(total - igv).toFixed(2);

    document.getElementById("subtotal").innerHTML = "$" + subtotal;
    document.getElementById("igv").innerHTML = "$" + igv;
    document.getElementById("total").value = "$" + total.toFixed(2);
  };

  render() {
    return (
      <>
        <Header
          total={() => {
            this.totalCalculate();
          }}
        />
        <section id="buy">
          <div className="container">
            <div className="row mt-3">
              <div className="col">
                <h2 className="d-flex justify-content-center mb-3">
                  Realizar Pedido
                </h2>
                <form id="buy-process" action="#" method="POST">
                  <div className="form-group row">
                    <label
                      for="client"
                      className="col-12 col-md-2 col-form-label h2"
                    >
                      Cliente :
                    </label>
                    <div className="col-12 col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        id="client"
                        placeholder="Ingresa nombre cliente"
                        name="addressee"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="email"
                      className="col-12 col-md-2 col-form-label h2"
                    >
                      Correo :
                    </label>
                    <div className="col-12 col-md-10">
                      <input
                        type="email"
                        className="form-control"
                        id="address"
                        placeholder="Ingresa tu correo"
                        name="cc_to"
                      />
                    </div>
                  </div>

                  <div id="buy-car" className="table-responsive">
                    <table className="table" id="buy-list">
                      <thead>
                        <tr>
                          <th scope="col">Imagen</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Sub Total</th>
                          <th scope="col">Eliminar</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                      <tr>
                        <th colspan="4" scope="col" className="text-right">
                          SUB TOTAL :
                        </th>
                        <th scope="col">
                          <p id="subtotal"></p>
                        </th>
                      </tr>
                      <tr>
                        <th colspan="4" scope="col" className="text-right">
                          IGV :
                        </th>
                        <th scope="col">
                          <p id="igv"></p>
                        </th>
                      </tr>
                      <tr>
                        <th colspan="4" scope="col" className="text-right">
                          TOTAL :
                        </th>
                        <th scope="col">
                          <input
                            type="text"
                            id="total"
                            name="total_value"
                            readonly
                            className="font-weight-bold border-0"
                          ></input>
                        </th>
                      </tr>
                    </table>
                  </div>

                  <div className="row justify-content-center" id="loaders">
                    <img id="load" src="../images/load.gif" />
                  </div>

                  <div className="row justify-content-between">
                    <div className="col-md-4 mb-2">
                      <a
                        href="../pages/menu.html"
                        className="btn btn-info btn-block"
                      >
                        Seguir comprando
                      </a>
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <button
                        href=""
                        className="btn btn-success btn-block"
                        type="submit"
                        id="process"
                      >
                        Realizar compra
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Buy;

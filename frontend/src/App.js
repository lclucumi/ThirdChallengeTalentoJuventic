import logo from "./logo.svg";
import "./App.css";
//Secciones
import Inicio from "./views/Inicio";
import Menu from "./views/Menu";
import About from "./views/About";
import Buy from "./views/Buy";
import Service from "./views/Service";
import ContactUs from "./views/ContactUs";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/buy">
          <Buy />
        </Route>
        <Route exact path="/service">
          <Inicio />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
        <Route exact path="/map">
          <Inicio />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

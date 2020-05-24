import React, { Component } from "react";
import Header from "./components/header/HeaderComponent";
import Footer from "./components/footer/FooterComponent";
import Registro from "./components/registro/RegistroComponent";
import Bienvenida from "./components/bienvenida/BienvenidaComponent";
import RegistrarConsumo from "./components/consumo/RegistrarConsumoComponent";
import ConfirmacionConsumo from "./components/consumo/ConfirmacionConsumoComponent";
import Cuenta from "./components/cuenta/CuentaComponent";
import Pago from "./components/pago/PagoComponent";
import ConfirmacionPago from "./components/pago/ConfirmacionPagoComponent";
import Consumo from "./components/consumo/ConsumoComponent";
import ListaProducto from "./components/producto/ListaProductoComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     productos: [
  //       { id: "1", nombre: "chopito", precio: 2000, cliente: "Pedro" },
  //       { id: "2", nombre: "papas fritas", precio: 2500, cliente: "Juan" },
  //       { id: "3", nombre: "chopito", precio: 2000, cliente: "Diego" },
  //       { id: "4", nombre: "chopito", precio: 2000, cliente: "José" }
  //     ]
  //   };
  // }

  constructor() {
    super();
    this.state = {
      productos: [],
    };
  }

  handleAgregarProducto(event) {
    console.log("handleAgregarProducto");
    event.preventDefault();

    let producto = {
      id: 1,
      nombre: event.target.nombre.value,
      precio: event.target.precio.value,
      cliente: event.target.cliente.value,
    };

    this.setState({
      productos: this.state.productos.concat([producto]),
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          {/* <Registro />
          <Bienvenida />
          <RegistrarConsumo
            agregarProducto={this.handleAgregarProducto.bind(this)}
          />
          <ListaProducto productos={this.state.productos} />
          <ConfirmacionConsumo />
          <Cuenta />
          <ListaProducto productos={this.state.productos} />
          <Pago />
          <ListaProducto productos={this.state.productos} />
          <ConfirmacionPago />
          <Consumo />
          <ListaProducto productos={this.state.productos} /> */}
          <Router>
            <Switch>
              <Route path="/" component={Home} />
              {/* <Route exact path="/home" component={H} /> */}
              {/* <Route exact path="/nuevo-consumo" component={RegistrarConsumo} /> */}
              {/* <Route
                exact
                path="/productos/editar/:id"
                component={EditarProducto}
              /> */}
            </Switch>
          </Router>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;

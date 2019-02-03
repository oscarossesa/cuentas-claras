import React, { Component } from 'react';
import Header from './components/header/HeaderComponent';
import Footer from './components/footer/FooterComponent';
import Registro from './components/registro/RegistroComponent';
import Bienvenida from './components/bienvenida/BienvenidaComponent';
import RegistrarConsumo from './components/consumo/RegistrarConsumoComponent';
import ConfirmacionConsumo from './components/consumo/ConfirmacionConsumoComponent';
import Cuenta from './components/cuenta/CuentaComponent';
import Pago from './components/pago/PagoComponent';
import ConfirmacionPago from './components/pago/ConfirmacionPagoComponent';
import Consumo from './components/consumo/ConsumoComponent';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <content className="App-content">
          <Registro />
          <Bienvenida />
          <RegistrarConsumo />
          <ConfirmacionConsumo />
          <Cuenta />
          <Pago />
          <ConfirmacionPago />
          <Consumo />
        </content>
        <Footer />
      </div>
    )
  }
}

export default App;

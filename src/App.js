import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Header
          </p>
        </header>
        <content className="App-content">
          <div className="pantalla-1">
            <h1>Pantalla 1 - Registro...</h1>
            <p>Hola, necesito que me otorgues el poder de saber cómo quieres que te llame en adelante.</p>
            <input placeholder="Llamame..."></input>
            <button>Siguiente</button>
          </div>
          <div className="pantalla-2">
            <h1>Pantalla 2 - Bienvenida y qué quiéres hacer?</h1>
            <h1>Hola Oscar!!</h1>
            <div className="cara">
              <p>La cara de la persona...puede ser la foto.</p>
            </div>
            <h4>Dime lo que quieres hacer...</h4>
            <div>
              <button className="">Registrar un consumo</button>
            </div>
            <div>
              <button className="">Ver cuenta</button>
            </div>
            <div>
              <button className="">Pagar</button>
            </div>
          </div>
          <div className="pantalla-3">
            <h1>Pantalla 3 - Registrar un consumo</h1>
            <p>Quiero un <input placeholder="Chopito!!"></input></p>

            <h5>¿Cuánto cuesta?</h5>
            <div>
              <input placeholder="$ 3.000"></input>
            </div>

            <h5>¿Quién lo pide?</h5>
            <div>
              Personas de la mesa, mostrar caras...o nombres...
            </div>
          </div>
          <div className="pantalla-4">
            <h1>Pantalla 4 - Confirmación de ingreso de consumo</h1>
            Tu Chopito fue ingresado a la cuenta.
            <div>Tu cuenta es $ 3.000</div>
            <div>de un total de $ 9.000</div>
          </div>
          <div className="pantalla-5">
            <h1>Pantalla 5 - Ver cuenta</h1>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>Producto</td>
                    <td>$</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Chopito</td>
                    <td>$ 3.000</td>
                  </tr>
                  <tr>
                    <td>Chorri</td>
                    <td>$ 8.700</td>
                  </tr>
                  <tr>
                    <td>Pisquito</td>
                    <td>$ 4.200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="pantalla-6">
            <h1>Pantalla 6 - Pagar</h1>            
            <h5>Oscar, ¿quién desea pagar?</h5>
            <div>
              Personas de la mesa, mostrar caras...o nombres...
            </div>
            <div>
              ...luego de presionar en la persona...
            </div>
            <div>
              El consumo de pepito es de $ 4.500
              <div>
              <table>
                <thead>
                  <tr>
                    <td>Producto</td>
                    <td>$</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Chopito</td>
                    <td>$ 3.000</td>
                  </tr>
                  <tr>
                    <td>Chorri</td>
                    <td>$ 8.700</td>
                  </tr>
                  <tr>
                    <td>Pisquito</td>
                    <td>$ 4.200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
          </div>
          <div className="pantalla-7">
            <h1>Pantalla 7 - Confirmación del pago</h1>
            <h5>Gracias por pagar la cuenta de pepito, a sido descontado del total.</h5>
          </div>
          <div className="pantalla-4">
            Mostrar total | Mostrar mi consumo
          </div>
        </content>
        <footer className="App-footer">
          <p>
            © 2019 Cuentas Claras.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

export default class PagoComponent extends Component {
  render() {
    return (
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
    )
  }
}

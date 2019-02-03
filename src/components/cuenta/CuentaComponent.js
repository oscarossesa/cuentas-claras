import React, { Component } from 'react';

export default class CuentaComponent extends Component {
  render() {
    return (
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
    )
  }
}

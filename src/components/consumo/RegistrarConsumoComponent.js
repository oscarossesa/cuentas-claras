import React, { Component } from 'react';

export default class ConsumoComponent extends Component {
  render() {
    return (
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
    )
  }
}

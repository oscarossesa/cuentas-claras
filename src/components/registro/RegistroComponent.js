import React, { Component } from 'react';

export default class Registro extends Component {
  render() {
    return (
      <div className="pantalla-1">
        <h1>Pantalla 1 - Registro...</h1>
        <p>Hola, necesito que me otorgues el poder de saber cómo quieres que te llame en adelante.</p>
        <input placeholder="Llamame..."></input>
        <button>Siguiente</button>
      </div>
    )
  }
}

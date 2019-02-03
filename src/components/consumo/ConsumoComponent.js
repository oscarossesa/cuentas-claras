import React, { Component } from 'react';
import ListaProducto from '../producto/ListaProductoComponent';

export default class ConsumoComponent extends Component {

  constructor() {
    super();
    this.state = {
      productos: [
        { id: 1, nombre: "chopito", precio: 2000, cliente: "Nacho" },
        { id: 2, nombre: "papas fritas", precio: 2500, cliente: "Nacho" },
        { id: 3, nombre: "chopito", precio: 2000, cliente: "Nacho" },
        { id: 4, nombre: "chopito", precio: 2000, cliente: "Nacho" }
      ]
    };
  }

  render() {
    return (
      <div className="pantalla-4">
        Mostrar total | Mostrar mi consumo
        <ListaProducto productos={ this.state.productos } />
      </div>
    )
  }
}

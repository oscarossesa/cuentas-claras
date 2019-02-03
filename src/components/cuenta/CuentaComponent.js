import React, { Component } from 'react';
import ListaProducto from "../producto/ListaProductoComponent";

export default class CuentaComponent extends Component {

  constructor() {
    super();
    this.state = {
      productos: [
        { id: "1", nombre: "chopito", precio: 2000, cliente: "Pedro" },
        { id: "2", nombre: "papas fritas", precio: 2500, cliente: "Juan" },
        { id: "3", nombre: "chopito", precio: 2000, cliente: "Diego" },
        { id: "4", nombre: "chopito", precio: 2000, cliente: "José" }
      ]
    };
  }
  
  render() {
    return (
      <div className="pantalla-5">
        <h1>Pantalla 5 - Ver cuenta</h1>
        <ListaProducto productos={ this.state.productos } />
      </div>
    )
  }
}

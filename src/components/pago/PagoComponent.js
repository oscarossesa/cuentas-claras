import React, { Component } from 'react';
import ListaProducto from '../producto/ListaProductoComponent';

export default class PagoComponent extends Component {

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
          <h2>aqui lista de productos...</h2>
          <ListaProducto productos={ this.state.productos } />  
        </div>
      </div>
    )
  }
}

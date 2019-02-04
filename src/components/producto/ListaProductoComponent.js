import React, { Component } from 'react';
import Producto from './ProductoComponent';

export default class ListaProductoComponent extends Component {

  render() {
    return (
      <div>
        {this.props.productos.map(p => {
          return (
            <Producto
              id={p.id}
              nombre={p.nombre}
              precio={p.precio}
              cliente={p.cliente}
            />
          );
        })}
      </div>
    );
  }
}

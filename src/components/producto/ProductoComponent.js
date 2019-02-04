import React, { Component } from 'react';

export default class ProductoComponent extends Component {

  render() {
    return (
      <div>
        Id: {this.props.id}, 
        Producto: {this.props.nombre}, 
        Precio: $ {this.props.precio}, 
        Cliente: {this.props.cliente}
      </div>
    )
  }
}

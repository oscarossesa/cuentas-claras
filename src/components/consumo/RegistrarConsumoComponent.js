import React, { Component } from 'react';

export default class RegistrarConsumo extends Component {

  render() {
    return (
      <div className="pantalla-3">
        <h5>Pantalla 3 - Registrar un consumo</h5>
        <form onSubmit={this.props.agregarProducto}>
          <div>
            Quiero un: <input type="text" placeholder="Chopito!!" name="nombre" />
          </div>
          <div>
            ¿Cuánto cuesta? <input type="text" placeholder="Precio" name="precio" />
          </div>
          <div>
            ¿Quién lo pide? <input type="text" placeholder="Nacho" name="cliente" />
          </div>          
          <input type="submit" value="Registar" />
        </form>        
      </div>
    )
  }
}

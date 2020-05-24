import React, { Component } from "react";
import Producto from "./ProductoComponent";

export default class ListaProductoComponent extends Component {
  render() {
    return (
      <div>
        {/* {this.props.productos.map((p) => {
          return (
            <Producto
              id={p.id}
              nombre={p.nombre}
              precio={p.precio}
              cliente={p.cliente}
            />
          );
        })} */}
        <h4>Consumo</h4>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Shop Austral
            <span class="badge badge-primary badge-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Mojito
            <span class="badge badge-primary badge-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Pápas fritas rusticas
            <span class="badge badge-primary badge-pill">1</span>
          </li>
          <li class="list-group-item align-items-center text-center">
            <button className="btn btn-success btn-block">Pagar $ 9.000</button>
          </li>
        </ul>
      </div>
    );
  }
}

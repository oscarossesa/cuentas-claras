import React, { Component } from "react";

export default class FooterComponent extends Component {
  render() {
    return (
      <footer class="fixed-bottom bg-dark text-white">
        <div class="container-fluid py-3">
          <div class="row">
            <div class="col-12 text-center small">
              ©2020 Cuentas Claras.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

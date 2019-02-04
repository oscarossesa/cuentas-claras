import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="App-header">
        { this.props.children }
        <h2>Cuentas Claras</h2>
      </div>
    )
  }
}

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="App-header">
        { this.props.children }
        <h1>Cuentas Claras</h1>
      </div>
    )
  }
}

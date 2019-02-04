import React, { Component } from 'react';

export default class Bienvenida extends Component {

  constructor(){
    super();

    this.state = { 
      person: []
    };
  }

  componentDidMount(){
    //Call to randomuser API.
    fetch('https://randomuser.me/api/')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let person = data.results.map((per) => {
          return (
            <div key={ per.id.value }>
              <div>Hola { per.name.first } { per.name.last }</div>
              <div key={ per.id.value }>
                <img alt='' src={per.picture.large} />
              </div>
            </div>
          )
      })
      this.setState({ 
        person: person
      });
    })
  }

  render() {
    return (
      <div className="pantalla-2">
        <h5>Pantalla 2 - Bienvenida y qué quiéres hacer?</h5>
        { this.state.person }
        Dime lo que quieres hacer...
        <div>
          <button className="">Registrar un consumo</button>
        </div>
        <div>
          <button className="">Ver cuenta</button>
        </div>
        <div>
          <button className="">Pagar</button>
        </div>
      </div>
    )
  }
}

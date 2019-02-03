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
            <div>
              <h1>Hola { per.name.first } { per.name.last }</h1>
              <div key={ per.results }>
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
        <h1>Pantalla 2 - Bienvenida y qué quiéres hacer?</h1>
        { this.state.person }
        <h4>Dime lo que quieres hacer...</h4>
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

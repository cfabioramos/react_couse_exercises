import React from 'react';
import './App.css';

/*
  App é uma componente React do tipo classe ou uma Classe Component. 
  Um componente recebe parâmetros, 
    chamados props (abreviação de propriedades), 
    e retorna uma hierarquia de elementos para exibir através do método render.
*/

class Appcomparizon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      atividade: "Estudar React"
    }
  }
  
  render (){
    console.log(this.props)
    return (
      <div>
        <h1>Lista de compras do {this.props.periodo}</h1>
        <ul>
          <li>Ovos</li>
          <li>Carne</li>
          <li>Frutas</li>
        </ul>
      </div>
    );
  }

}

export default Appcomparizon;

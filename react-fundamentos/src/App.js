import React from 'react';
import './App.css';

/*
  App é um componente React do tipo function. 
  Um componente recebe parâmetros, 
    chamados props (abreviação de propriedades), 
    e retorna uma hierarquia de elementos para exibir.
*/

function App(props) {

  console.log(props)
  // JSX: todo o poder do JavaScript para representacao HTML.
  // Nele você pode colocar quaisquer expressões JavaScript dentro de chaves no JSX.
  return (
    <div>
      <h1>Lista de compras do {props.periodo}</h1>
      <ul>
        <li>Ovos</li>
        <li>Carne</li>
        <li>Frutas</li>
        {linhavariavel}
      </ul>
    </div>
  );
}

const linhavariavel = <li>Verificar</li>;

export default App;

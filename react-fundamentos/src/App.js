import React from 'react';
import './App.css';

import Header from './layout/Header'

/*
  App é um componente React do tipo function. Um componente recebe parâmetros, 
  chamados props (abreviação de propriedades), e retorna uma hierarquia de elementos para exibir.
*/
/* Pontos a atentar:
  i. props são imutáveis
  ii. não necessidade de ponto e vírgula, não ser em loop for
  iii. a possibilidade de usar arrow functions
*/

function App(props) {

  console.log(props)
  // JSX: todo o poder do JavaScript para representacao HTML
  // Permite o uso de expressões JavaScript dentro de chaves
  return (
    <div>
      <Header />
      <h3>Lista de compras do {props.periodo}</h3>
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

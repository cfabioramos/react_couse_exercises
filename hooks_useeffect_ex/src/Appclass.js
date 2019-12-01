import React, {useState, useEffect} from 'react';

/*
Em React o método render dos componentes 
    não deveria causar efeitos colaterais, porque seria muito cedo.
Operações como requisições http, alterações no DOM e loggin são exemplos 
    de side efects.

Quando você usa o useEffect, você está dizendo ao React para executar
  a sua tarefa depois que ele faz as mudanças no DOM.
  Ele funciona como componentDidMount, 
    componentDidUpdate e componentWillUnmount em classes, mas unificado.
  
  De forma default o React executa o useEffect após cada renderização,
  incluindo a primeira
*/

function Appclass() {
  const [quantidade, setQuantidade] = useState(0);

  // Semelhante a componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento utilizando a API do browser
    document.title = `Você clicou ${quantidade} vezes`;

    // adicionando limpeza
    return () => {
        console.log('Limpeza...');
    };

  });

  useEffect(() => {
    console.log('Funciona!')
  });

  return (
    <div>
      <p>Você clicou {quantidade} vezes</p>
      <button onClick={() => setQuantidade(quantidade + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default Appclass;

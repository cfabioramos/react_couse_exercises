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

  useEffect(() => {
    // Semelhante a componentDidMount e componentDidUpdate
    document.title = `Você clicou ${quantidade} vezes`;
    console.log('Operação de subscribe...');

    // Semelhante a componentWillUnmount
    // It cleans up the previous effects before applying the next effects.
    return () => {
        console.log('Operação de unsubscribe...');
    };
  }, [quantidade]); 
  // Reexecuta apenas quando "quantidade" e alterada
  // React não executa o efeito se todos os itens no array são os mesmos
  // React executa se apenas um for diferente
  // Se você deseja rodar o effect e o clean apenas uma vez 
  //  (on mount e unmount), você pode passar um array vazio.
  // Isso diz que o seu efeito não depende de nenhum valor de props ou state,
  //  portanto, ele nunca precisa ser reexecutado.

//  useEffect(() => {
//    console.log('Funciona!')
//  }, []);
  /* [] significa que o efeito não usa nenhum valor que participa do fluxo de 
  renderização de dados e, por isso, é seguro para ser aplicado apenas uma vez. */

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

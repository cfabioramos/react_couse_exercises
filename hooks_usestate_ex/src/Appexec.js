import React, {useState} from 'react';

/*
1. Configure um novo projeto
2. Crie um componente funcional chamado MyInfo que retorna os seguintes dados:
  - Um h1 com exibindo o seu nome
  - Um parágrafo apresentando algumas informações sobre você
  - Uma lista ordenada ou desordenada contendo 3 locais que você gostaria de visitar.
    Observação: 
  Extra: Apresente cada linha da lista com uma cor de fundo definida através de uma
   propriedade chamada "cor"
*/

function Appexec(props) {

    const [paises] = useState([{ nome: 'Porgual' }]);
    paises.push({ nome: 'Austrália' })
    paises.push({ nome: 'Nova Zelândia' })
  
    return (
      <div>
        <h1>José da Silva</h1>
        <p>Desenvolvedor de Software com mais de 10 anos de experiência, que 
          pretende visitar os seguintes países:
        </p>
        <ul>
          <li style={{background:props.cor}}>{paises[0].nome}</li>
          <li style={{background:props.cor}}>{paises[1].nome}</li>
          <li style={{background:props.cor}}>{paises[2].nome}</li>
        </ul>
      </div>
    );
  

}

export default Appexec;
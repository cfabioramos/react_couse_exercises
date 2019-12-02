import React from 'react';

/*
    Exibir uma lista ordenada (ol) de afazeres de um mês determinado por uma propriedade.
    Para as linhas finalizadas exibir uma coloração de fundo de acordo com o valor
    passado também por uma propriedade chamada "finalizedTaskColor"
*/

function Appexerc(props) {
    
    return (
        <div>
            <h1>Lista de afazeres do mês de {props.periodo}</h1>
            <ol>
                <li style={{background:props.finalizedTaskColor}}>Estudar React</li>
                <li>Ir para encontro de tecnologia</li>
                <li style={{background:props.finalizedTaskColor}}>Desenvolver aplicativo</li>
            </ol>
        </div>
    )
}

export default Appexerc;
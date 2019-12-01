import React, { useState } from 'react';

function Appclass () {
 /* useState is a Hook. We call it inside a function component to add some local state to it
 React will preserve this state between re-renders
 It returns a pair: the current state value and a function that lets you update it
 The only argument to useState is the initial state */
 const [count, setCount] = useState(0);
 const [botao] = useState('banana');
 const [todos] = useState([{ text: 'Estudar React' }]);

 return (
   <div>
     <p>Você clicou {count} vezes no {botao}</p>
     <button onClick={() => setCount(count + 1)}> {botao} </button>
        <h3>Lista de afazeres: </h3>
        <ul>
            <li>{todos[0].text}</li>
        </ul>

   </div>
 );

}
// Para efeito de comparação posso mostrar como isso ficaria em uma classe.

export default Appclass;
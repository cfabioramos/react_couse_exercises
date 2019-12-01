import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos] = useState([{ text: 'Aprender JSX' }]);
  todos.push({ text: 'Aprender Hooks' })
  todos.push({ text: 'Aprender Props' })

  return (
    <ul>
      <li>{todos[0].text}</li>
      <li>{todos[1].text}</li>
      <li>{todos[2].text}</li>
    </ul>
  );

}

export default App;

import React, {Component} from 'react';

class Appcomparison extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            botao: 'Clique aqui...',
            todos: [{ text: 'Estudar React' }]
        }
    }

    setCount(newCount) {
        this.setState({count: newCount})
    }

    render() {
        return (
          <div>
            <p>Você clicou {this.state.count} vezes no {this.state.botao}</p>
            <button onClick={(event) => {console.log(event.target);this.setCount(this.state.count + 1)}}> {this.state.botao} </button>
               <h3>Lista de afazeres: </h3>
               <ul>
                   <li>{this.state.todos[0].text}</li>
               </ul>
          </div>
        );
    }

}

export default Appcomparison;
import React from 'react'

class Appcomparison extends React.Component {

    constructor() {
        super();
        this.state = {
            quantidade: 0
        }
    }

    componentDidMount() {
        document.title = `Você clicou ${this.state.quantidade} vezes`;
    }

    componentDidUpdate() {
        document.title = `Você clicou ${this.state.quantidade} vezes`;
    }

    render() {
        return (
            <div>
                <p>Você clicou {this.state.quantidade} vezes</p>
                <button onClick={() => this.setState({ quantidade: this.state.quantidade + 1 })}>
                Clique aqui
                </button>
            </div>
        )
    }

}

export default Appcomparison;
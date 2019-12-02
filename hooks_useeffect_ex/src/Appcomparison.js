import React from 'react'

class Appcomparison extends React.Component {

    constructor() {
        super();
        this.state = {
            quantidade: 0
        }
    }

    componentDidMount() {
        document.title = `Você não clicou `;
        console.log('Operação de subscribe')
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `Você clicou ${this.state.quantidade} vezes`;

        if (prevState.count !== this.state.count) {
            console.log('Operação custosa...')
        }
    }

    componentWillUnmount() {
        console.log('Operação de unsubscribe')
        alert('Bateeeeu')
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
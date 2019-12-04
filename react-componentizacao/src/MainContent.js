import React from 'react'

function MainContent() {

    return (
        <main>
            <p>Aqui estará a descrição inicial da tela no meu main content</p>
            <p>
                <label>Nome: </label>
                <input type="text" name="nome"/>
            </p>
            <p>
                <label>Interesses:</label><br />
                <input type="checkbox" name="futebol" />Futebol<br />
                <input type="checkbox" name="sexo"/>Sexo<br />
                <input type="checkbox" name="Tecnologia"/>Tecnologia
            </p>
            
            <button>Inserir</button>
        </main>
    )

}

export default MainContent
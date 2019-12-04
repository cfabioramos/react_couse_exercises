import React from 'react'

function Header() {

    const data = new Date()
    const horas = data.getHours()
    let saudacao
    
    if (horas < 12) {
        saudacao = "Bom dia"
    } else if (horas >= 12 && horas < 17) {
        saudacao = "Boa tarde"
    } else {
        saudacao = "Boa noite"
    }

    let nome = 'Carlos Fábio'

    return (
        <div>
            <h1>React Fundamentos</h1>
            <h3>{saudacao + ' ' + nome}</h3>
        </div>
    )

}

export default Header
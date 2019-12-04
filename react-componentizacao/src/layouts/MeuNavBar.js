import React from 'react'
import './MeuNavBar.css'

function MeuNavBar() {

    let saudacao = getSaudacao();

    return (
        <nav>
            <h1 className="navbar">Componentização React</h1>
            <ul>
                <li>Home</li>
                <li>Serviços</li>
                <li>Contact Us</li>
                <li>Sair</li>
            </ul>
            <h3 style={saudacao.styles}>{saudacao.saudacao} Carlos Fábio</h3>
        </nav>
    )
}

function getSaudacao () {

    const data = new Date(2018, 6, 31, 19)
    const horas = data.getHours()
    let saudacao
    const styles = {fontSize: 30}
    
    if (horas < 12) {
        saudacao = "Bom dia"
        styles.color = "#04756F"
    } else if (horas >= 12 && horas < 17) {
        saudacao = "Boa tarde"
        styles.color = "#8914A3"
    } else {
        saudacao = "Boa noite"
        styles.color = "#D90000"
    }

    return {saudacao: saudacao, styles: styles}

}

export default MeuNavBar
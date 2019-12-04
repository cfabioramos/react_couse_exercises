import React from 'react'
import './MeuNavBar.css'

function MeuNavBar() {

    return (
        <nav>
            <h1 className="navbar">React Básico</h1>
            <ul>
                <li>Home</li>
                <li>Serviços</li>
                <li>Contact Us</li>
                <li>Sair</li>
            </ul>
        </nav>
    )
}

export default MeuNavBar
import React from 'react';
import './App.css';
import MeuNavBar from './layouts/MeuNavBar';
import Footer from './layouts/Footer';
import MainContent from './MainContent';

/*
DESAFIO!
  Criar uma página com três componentes: 
    - Header, chamado MeuHeader com o código HTML:
      <header className="header">
        <a href="#default" className="logo">CompanyLogo</a>
        <div className="header-right">
            <a className="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
      </header> 
      Link do css: 
      https://github.com/cfabioramos/react_couse_exercises/blob/master/react-componentizacao/src/layouts/MeuHeaderEx.css
    - MainContent, com elementos de formulário (usar como base: https://htmlreference.io/forms/ )
    - Footer, chamado MeuFooter (liberdade para criar)
*/

function App() {
  return (
    <div>
      <MeuNavBar />
      <MainContent />
      <Footer /> 
    </div>
  );
}

export default App;

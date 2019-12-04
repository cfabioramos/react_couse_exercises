import React from 'react';
import './App.css';
import MeuNavBar from './layouts/MeuNavBar';
import Footer from './layouts/Footer';
import MainContent from './MainContent';

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

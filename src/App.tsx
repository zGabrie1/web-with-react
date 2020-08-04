import React from 'react';

import './assets/styles/global.css'

import './pages/landing'
import Landing from './pages/landing';

//Função componente: Função que retorma um HTML.
//O nome do Componente sempre com letra maiúscula. Exemplo: funtion App()
function App() {
  return (
    <Landing/>
  );
}

export default App;

// JSX = JavaScript + XML(sintaxe do HTML)
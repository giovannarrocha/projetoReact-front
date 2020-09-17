import React from 'react';
import './App.css';
import MainApp from './layout/main';
import Mapa from './components/mapa/Mapa'
import Display from './components/display/Display';

function App() {
  return (
    <MainApp>
      <Mapa/>
      <Display enderecoDestino="" />
    </MainApp>
  );
  }

  export default App;

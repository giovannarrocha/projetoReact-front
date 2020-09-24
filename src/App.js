import React, {useState} from 'react';
import './App.css';
import MainApp from './layout/main';
import Mapa from './components/mapa/Mapa'
import Display from './components/display/Display';
import Search from './components/search/Search';

function App() {
  const [enderecoDestino, setEnderecoDestino] = useState("");

  const procurarEndereco = (endereco) => {
    setEnderecoDestino(endereco);
  }
  return (
    <MainApp>
      <Mapa/>
      <Search procuraEnderecoDestino={procurarEndereco} />
      <Display enderecoDestino={enderecoDestino} />
    </MainApp>
  );
  }

  export default App;

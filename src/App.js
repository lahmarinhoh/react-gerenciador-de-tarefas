import React from 'react';
import { TarefaProvider } from './context/TarefaContext';
import Header from './components/Header';
import InputNovaTarefa from './components/InputNovaTarefa';
import Filtros from './components/Filtros';
import ListaDeTarefas from './components/ListaDeTarefas';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <TarefaProvider>
      <div className="container">
        <Header />
        <InputNovaTarefa />
        <Filtros />
        <ListaDeTarefas />
        <Footer />
      </div>
    </TarefaProvider>
  );
};

export default App;
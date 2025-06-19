import './App.css';
import React, { useState } from 'react';
import { TarefaProvider, useTarefaContext } from './context/TarefaContext';
import ListaDeTarefas from './components/ListaDeTarefas';

function ConteudoPrincipal() {
  const { dispatch } = useTarefaContext();
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      dispatch({ type: 'ADICIONAR_TAREFA', payload: novaTarefa });
      setNovaTarefa('');
    }
  };

  return (
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>
      <div className="input-adicionar">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma nova tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <div className="filtros">
        <button onClick={() => dispatch({ type: 'SET_FILTRO', payload: 'todas' })}>
          Todas
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTRO', payload: 'concluidas' })}>
          Concluídas
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTRO', payload: 'pendentes' })}>
          Pendentes
        </button>
      </div>

      <ListaDeTarefas />

      <footer className="rodape">
        <p>
          <strong>Lara Marinho Cordeiro</strong><br />
          RA 5130604<br />
          Sistemas da Informação<br />
          <a href="https://www.uniube.br" target="_blank" rel="noopener noreferrer">
            Universidade de Uberaba - UNIUBE
          </a>
        </p>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <TarefaProvider>
      <ConteudoPrincipal />
    </TarefaProvider>
  );
}

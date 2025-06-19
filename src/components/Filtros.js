import React from 'react';
import { useTarefaContext } from '../context/TarefaContext';
import './filtros.css';

const Filtros = () => {
  const { state, dispatch } = useTarefaContext();

  return (
    <div className="filtros">
      <button
        className={state.filtro === 'todas' ? 'ativo' : ''}
        onClick={() => dispatch({ type: 'SET_FILTRO', payload: 'todas' })}
      >
        Todas
      </button>
      <button
        className={state.filtro === 'concluidas' ? 'ativo' : ''}
        onClick={() => dispatch({ type: 'SET_FILTRO', payload: 'concluidas' })}
      >
        Concluídas
      </button>
      <button
        className={state.filtro === 'pendentes' ? 'ativo' : ''}
        onClick={() => dispatch({ type: 'SET_FILTRO', payload: 'pendentes' })}
      >
        Pendentes
      </button>
    </div>
  );
};

export default Filtros;

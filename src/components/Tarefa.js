import React from 'react';
import { useTarefaContext } from '../context/TarefaContext';
import './tarefa.css';

const Tarefa = ({ tarefa }) => {
  const { dispatch } = useTarefaContext();

  const statusTexto = tarefa.concluida ? 'Concluído' : 'Pendente';

  return (
    <li className="tarefa-item" title={statusTexto}>
      <input
        type="checkbox"
        className="tarefa-checkbox"
        checked={tarefa.concluida}
        onChange={() => dispatch({ type: 'TOGGLE_TAREFA', payload: tarefa.id })}
      />
      <span className={tarefa.concluida ? 'tarefa-concluida' : ''}>{tarefa.titulo}</span>
      <button
        className="btn-remover"
        aria-label={`Remover tarefa ${tarefa.titulo}`}
        onClick={() => dispatch({ type: 'REMOVER_TAREFA', payload: tarefa.id })}
      >
        🗑️
      </button>
    </li>
  );
};

export default Tarefa;

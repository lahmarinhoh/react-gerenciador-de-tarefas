import React from 'react';
import { useTarefaContext } from '../context/TarefaContext';
import Tarefa from './Tarefa';
import MensagemVazia from './MensagemVazia';
import './listaTarefas.css';

const ListaDeTarefas = () => {
  const { state } = useTarefaContext();

  let tarefasFiltradas = [];
  switch (state.filtro) {
    case 'concluidas':
      tarefasFiltradas = state.tarefas.filter(t => t.concluida);
      break;
    case 'pendentes':
      tarefasFiltradas = state.tarefas.filter(t => !t.concluida);
      break;
    default:
      tarefasFiltradas = state.tarefas;
  }

  if (tarefasFiltradas.length === 0) return <MensagemVazia />;

  return (
    <ul>
      {tarefasFiltradas.map(tarefa => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
};

export default ListaDeTarefas;

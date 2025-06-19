import React from 'react';
import Tarefa from './Tarefa';
import { useTarefaContext } from '../context/TarefaContext';

const ListaDeTarefas = () => {
  const { state } = useTarefaContext();
  const { tarefas, filtro } = state;

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === 'todas') return true;
    if (filtro === 'concluidas') return tarefa.concluida;
    if (filtro === 'pendentes') return !tarefa.concluida;
    return true;
  });

  return (
    <ul>
      {tarefasFiltradas.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
};

export default ListaDeTarefas;

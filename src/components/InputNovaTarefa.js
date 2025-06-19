import React, { useState } from 'react';
import { useTarefaContext } from '../context/TarefaContext';
import './inputNovaTarefa.css';

const InputNovaTarefa = () => {
  const [novaTarefa, setNovaTarefa] = useState('');
  const { dispatch } = useTarefaContext();

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') return;
    dispatch({ type: 'ADICIONAR_TAREFA', payload: novaTarefa.trim() });
    setNovaTarefa('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      adicionarTarefa();
    }
  };

  return (
    <div className="input-adicionar">
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={novaTarefa}
        onChange={e => setNovaTarefa(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
};

export default InputNovaTarefa;

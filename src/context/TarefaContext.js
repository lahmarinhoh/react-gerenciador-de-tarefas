import React, { createContext, useContext, useReducer } from 'react';

const TarefaContext = createContext();

const initialState = {
  tarefas: [],
  filtro: 'todas',
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADICIONAR_TAREFA':
      const novaTarefa = {
        id: Date.now(),
        titulo: action.payload,
        concluida: false,
      };
      return {
        ...state,
        tarefas: [...state.tarefas, novaTarefa],
      };
    case 'TOGGLE_TAREFA':
      return {
        ...state,
        tarefas: state.tarefas.map(t =>
          t.id === action.payload ? { ...t, concluida: !t.concluida } : t
        ),
      };
    case 'REMOVER_TAREFA':
      return {
        ...state,
        tarefas: state.tarefas.filter(t => t.id !== action.payload),
      };
    case 'SET_FILTRO':
      return {
        ...state,
        filtro: action.payload,
      };
    default:
      return state;
  }
}

export const TarefaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TarefaContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefaContext.Provider>
  );
};

export const useTarefaContext = () => useContext(TarefaContext);

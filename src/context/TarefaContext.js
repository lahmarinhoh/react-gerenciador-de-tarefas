import React, { createContext, useReducer, useContext } from 'react';

const TarefaContext = createContext();

const initialState = {
  tarefas: [],
  filtro: 'todas',
};

function tarefaReducer(state, action) {
  switch (action.type) {
    case 'ADICIONAR_TAREFA':
      return {
        ...state,
        tarefas: [
          ...state.tarefas,
          { id: Date.now(), titulo: action.payload, concluida: false },
        ],
      };
    case 'TOGGLE_TAREFA':
      return {
        ...state,
        tarefas: state.tarefas.map((tarefa) =>
          tarefa.id === action.payload
            ? { ...tarefa, concluida: !tarefa.concluida }
            : tarefa
        ),
      };
    case 'SET_FILTRO':
      return {
        ...state,
        filtro: action.payload,
      };
    case 'REMOVER_TAREFA':
      return {
        ...state,
        tarefas: state.tarefas.filter(tarefa => tarefa.id !== action.payload)
      };
    default:
      return state;
  }
}

export function TarefaProvider({ children }) {
  const [state, dispatch] = useReducer(tarefaReducer, initialState);
  return (
    <TarefaContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefaContext.Provider>
  );
}

export function useTarefaContext() {
  return useContext(TarefaContext);
}

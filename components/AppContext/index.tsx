import React, { createContext, useContext, useReducer } from 'react';

type Action = {
  type: 'CHANGE_THEME';
  payload: { bgColor: string; primaryColor: string };
};
type Dispatch = (action: Action) => void;
type State = { bgColor: string; primaryColor: string; borderColor: string };
type AppProviderProps = { children: React.ReactNode };

const AppStateContext = createContext<State | undefined>(undefined);
const AppDispatchContext = createContext<Dispatch | undefined>(undefined);

function appReducer(state: State, action: Action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        bgColor: action.payload.bgColor,
        primaryColor: action.payload.primaryColor,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, {
    bgColor: 'linear-gradient(to bottom right, #50a3a2 0%, #78cc6d 100%);',
    primaryColor: '#78cc6d',
    borderColor: 'rgba(121, 201, 109, 0.5)',
  });
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);

  if (context === undefined) {
    throw new Error('useAppState must be used inside a AppProvider');
  }

  return context;
}

export function useAppDispatch() {
  const context = useContext(AppDispatchContext);

  if (context === undefined) {
    throw new Error('useAppDispatch must be used inside a AppProvider');
  }

  return context;
}

export default AppProvider;

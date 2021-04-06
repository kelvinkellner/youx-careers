import React from 'react';

export const AppContext = React.createContext(null);

export const AppContextProvider = (props) => {
    const [ appState, setAppState ] = React.useState({});
    const  appStateProvider = React.useMemo(() => ({ appState, setAppState }), [ appState, setAppState ]);

    const setAppStateItem = (key, value) => {
      appStateProvider.setAppState(state => { return { ...state, [key]: value} })
      return value;
    }
  
    const getAppStateItem = (key = '', fallback) => {
      return appState[key] || fallback;
    }
  
    const deleteAppStateItem = (key = '') => {
      if(key in appState) {
        appStateProvider.setAppState(state => {
            const newState={...state};
            delete newState[key];
            return newState;
        })
      }
    }
  
    return (
      <AppContext.Provider value={{ appStateProvider, setAppStateItem, getAppStateItem, deleteAppStateItem }}>
        {props.children}
      </AppContext.Provider>
    )
  }
import { useState } from 'react';

// import { saveStorage, loadStorage } from '../services/localStorage';
import AppContext from './AppContext';

function Provider({ children }) {
  const contextValue = {
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

import { useState } from 'react';

// import { saveStorage, loadStorage } from '../services/localStorage';
import AppContext from './AppContext';

const data = require('../data');

function Provider({ children }) {
  const [arrayContent, setArrayContent] = useState(data);

  const contextValue = {
    arrayContent,
    setArrayContent,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

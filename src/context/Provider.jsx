import { useState } from 'react';

// import { saveStorage, loadStorage } from '../services/localStorage';
import AppContext from './AppContext';

const data = require('../data');

function Provider({ children }) {
  const [arrayContent, setArrayContent] = useState(data);
  const [editorState, setEditorState] = useState();  

  const contextValue = {
    arrayContent,
    setArrayContent,
    editorState,
    setEditorState,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

import { useContext, useState } from 'react';
import { ArticleTextComponent, ArticleTitleSecondaryComponent } from '../components';
import AppContext from '../context/AppContext';

const data = require('../data');

function ArticlePage() {
  const {
    editorState,
    setEditorState,
  } = useContext(AppContext);

  return (editorState);
}

export default ArticlePage;

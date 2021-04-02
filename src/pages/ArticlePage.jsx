import { useState } from 'react';
import { ArticleTextComponent, ArticleTitleSecondaryComponent } from '../components';

const data = require('../data');

function ArticlePage() {
  const [arrayContent, setArrayContent] = useState(data);

  return (
    <div name="conteúdo">
      {
        arrayContent.map((element) => {
          const content = element.content;
          switch (element.type) {
            case 'titleSecondary': return <ArticleTitleSecondaryComponent content={ content } />
            case 'text': return <ArticleTextComponent content={ content } />;
            default: return <></>;
          }
        })
      }
    </div>
  );
}

export default ArticlePage;

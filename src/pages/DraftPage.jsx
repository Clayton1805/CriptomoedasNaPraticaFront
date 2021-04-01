import ContentTextComponent from '../components/ContentTextComponent';

const data = require('../data');

function DraftPage() {
  return (
    <>
      <div name="conteúdo">
        {
          data.map((element) => {
            switch (element.type) {
              case 'titleSecondary': return <h2>{element.content.text}</h2>
              case 'text': return <ContentTextComponent content={ element.content } />;
              default: return <></>;
            }
          })
        }
      </div>
      <div name="modificadores">
        <p>modificadores</p>
      </div>
    </>
  );
}

export default DraftPage;

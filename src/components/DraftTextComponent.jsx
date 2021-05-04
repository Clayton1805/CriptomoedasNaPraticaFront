import React, { Component, useContext, useRef, useState } from "react";
// import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import AppContext from "../context/AppContext";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// import { BlockNodeRecord } from 'BlockNodeRecord';

import '../style/DraftTextComponent.css'
import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import { Modifier } from 'draft-js';

function DraftTextComponent({ content }) {
  // const {
  //   editorState,
  //   setEditorState,
  // } = useContext(AppContext);
  const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
  const contentBlock = htmlToDraft(html);
  // console.log('contentBlock.contentBlocks', contentBlock.contentBlocks)
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
  const editorState2 = EditorState.createWithContent(contentState);
  const [editorState, setEditorState] = useState(editorState2);  

  return (
    <>
      <Editor
        editorState={editorState}
        // wrapperClassName="demo-wrapper"
        // editorClassName="demo-editor"
        onEditorStateChange={setEditorState}
        toolbarOnFocus
        toolbarClassName='header_costumer'
        // toolbarClassName="toolbar-class"
      />
      <div>
        {console.log('JSON', convertToRaw(editorState.getCurrentContent()))}
        { console.log(
          <td onClick={ ({target}) => console.log('target', target.innerText) } dangerouslySetInnerHTML={{__html: draftToHtml(convertToRaw(editorState.getCurrentContent()))}} />
        )}
      </div>
      <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </>
  );
}


// function DraftTextComponent({ content }) {
//   const {
//     setArrayContent,
//   } = useContext(AppContext);

//   const {
//     textFormat: {
//       color,
//       fontSize,
//       fontFamily,
//     },
//     span,
//     link,
//     text,
//   } = content;

//   const contentFunc = () => text
//     .reduce((array, elementText, index) => {
//       array.push(elementText);

//       const objLink = link.find(({ position }) => position === index);

//       if (objLink) {
//         const linkText = objLink.linkText
//           ? objLink.linkText
//           : objLink.url
        
//         array.push(
//           `<a href=${objLink.url}
//             style='color:#5C3317;'
//           >${linkText}</a>`
//         );
//         return array;
//       }

//       const objSpan = span.find(({ position }) => position === index);

//       if (objSpan) {
//         const stringStrong = `<strong `
//           + `style='color:#5C3317;'`
//           + `>`
//           + `${objSpan.spanText}`
//           + `</strong>`;
//         console.log('stringStrong', stringStrong.length);
//         array.push(stringStrong);
//         return array;
//       }

//       return array;
//     }, []);
  
//   // const [statusContent, setStatusContent] = useState();
//   const text2 = useRef(contentFunc().join(''));
  
//   // const funcOla = ({ target }) => {
//   //   console.log('olaa', target.innerText)
//   //   // setStatusContent(target.innerText);
//   // }

//   const handleChange = evt => {
//     // console.log('handleChange value', evt.target.value)
//     console.log('handleChange Text', evt)
//     text2.current = evt.target.value;
//   };

//   const handleBlur = () => {
//     console.log('handleBlur', text2.current);
//   };

//   return (
//     <div>
//       <ContentEditable
//         style={{
//           color: '#21a809',
//         }}
//         html={text2.current}
//         onBlur={handleBlur}
//         onChange={handleChange} />
//     </div>
//   );
// }

// class DraftTextComponent extends React.Component {
//   constructor() {
//     super()
//     this.contentEditable = React.createRef();
//     this.state = {html: "Hello <span className='draftText'>show</span> <a href={ 'https://github.com/Clayton1805' }>World</a>"};
//   };
 
//   handleChange = evt => {
//     this.setState({html: evt.target.innerHTML});
//   };
 
//   render = () => {
//     return (
//       <>
//       {console.log(this.state)}
//         <ContentEditable
//           innerRef={this.contentEditable}
//           html={this.state.html} // innerHTML of the editable div
//           disabled={false}       // use true to disable editing
//           onChange={this.handleChange} // handle innerHTML change
//           tagName='article' // Use a custom HTML tag (uses a div by default)
//         />
//         <span className='draftText'>oi</span>
//       </>
//     )
//   };
// };

export default DraftTextComponent;

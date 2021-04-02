import React, { useContext, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import AppContext from "../context/AppContext";

import '../style/DraftTextComponent.css'

function DraftTextComponent({ content }) {
  const {
    setArrayContent,
  } = useContext(AppContext);

  const {
    textFormat: {
      color,
      fontSize,
      fontFamily,
    },
    span,
    link,
    text,
  } = content;

  const contentFunc = () => text
    .reduce((array, elementText, index) => {
      array.push(elementText);

      const objLink = link.find(({ position }) => position === index);

      if (objLink) {
        const linkText = objLink.linkText
          ? objLink.linkText
          : objLink.url
        
        array.push(
          `<a href=${objLink.url}
            style='color:#5C3317;'
          >${linkText}</a>`
        );
        return array;
      }

      const objSpan = span.find(({ position }) => position === index);

      if (objSpan) {
        array.push(
          `<strong
            style='color:#5C3317;'
          >
            ${objSpan.spanText}
          </strong>`
        );
        return array;
      }

      return array;
    }, []);
  
  // const [statusContent, setStatusContent] = useState();
  const text2 = useRef(contentFunc().join(''));
  
  // const funcOla = ({ target }) => {
  //   // console.log('olaa', target.innerHTML)
  //   setStatusContent(target.innerText);
  // }

  const handleChange = evt => {
    console.log('handleChange', evt.target.value)
    text2.current = evt.target.value;
  };

  const handleBlur = () => {
    console.log('handleBlur', text2.current);
  };

  return (
    <div>
      <ContentEditable
        style={{
          color: '#21a809',
        }}
        html={text2.current}
        onBlur={handleBlur}
        onChange={handleChange} />
    </div>
  );
}

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

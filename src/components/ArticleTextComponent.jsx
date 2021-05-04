import { useContext } from "react";
import AppContext from "../context/AppContext";

function ContentTextComponent() {
  // const {
  //   editorState,
  //   setEditorState,
  // } = useContext(AppContext);

  // return (editorState);
}

// function ContentTextComponent({ content }) {
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
//           <a href={ objLink.url }
//             style={{
//               color: objLink.color,
//             }}
//           >{ linkText }</a>
//         );
//         return array;
//       }

//       const objSpan = span.find(({ position }) => position === index);

//       if (objSpan) {
//         array.push(
//           <span
//             style={{
//               color: objSpan.color,
//               fontWeight: objSpan.fontWeight
//             }}
//           >
//             { objSpan.spanText }
//           </span>
//         );
//         return array;
//       }

//       return array;
//     }, []);

//   return (
//     <div>
//       <p
//        style={{ color, fontSize, fontFamily }}
//       >
//         { contentFunc() }
//       </p>
//     </div>
//   );
// }

export default ContentTextComponent;

import React, { useState, Component } from 'react'

// difference between props and state in react component ?

// Execice: write a component that diplays a counter (intial value 0) and icrease the counter when you click the button plus.

// // es5
// function hello() {
// }

// // es6

// // arrow function
// const hello2 = () => {
//  return console.log('Yesmine');
// }

// const hello3 = () => console.log('Yesmine')
 
const Textarea = () => {
  const [text,setText] = useState(""); // react hooks  useState, useEffect ....
  
  return (
    <textarea
      className="text-area"
      placeholder="Paste your text here..."
      onChange={(e) => setText(e.target.value)}
      value={text}
    />
  )
}



//class components 
// export default class Textarea extends Component {

//   constructor() {
//     super();
//     this.state = { text : "hbiba" }; // initial state
//   }

//   onTextChange(e) {
//     console.log('e.target.value', e.target.value);
//     this.setState({ text : e.target.value }); //chnager la valeur du text dans textarea
//   }

//   render() {
//     return (
//       <textarea
//         className="text-area"
//         placeholder="Paste your text here..."
//         onChange={(e) => this.onTextChange(e)} //capter l'even et l'envoyer vers la fonction on text change
//         defaultValue={this.state.text}
//       />
//     );
//   }
// }


export default Textarea;
import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isClicked: false,
      input: "",
      items: [],
    };
  }

inputUpdate = (event) => {
  this.setState({ input: event.target.value });
  console.log(event.target.value);
};
formSubmit = (event) => {
  event.preventDefault();
  this.setState({
    items: [...this.state.items, this.state.input],
    input: "",
  });
  console.log("clicked")
};

//Clear input once submitted- need to assign items an ID to be able to select an item and delete it! 
// https://codesandbox.io/s/delete-an-item-from-an-array-onclick-class-qko1r?file=/src/App.js

 handleClick = (id) => {
  //find item by index
  const foundIndex = this.state.items.findIndex((items) => items.id === id);
  const copy = [... this.state.items];
  copy.splice(foundIndex, 1);
  this.setState({items:copy})
}
}

render() {
  return (
    <div className="App">
      <h1>This is my ToDo App!</h1>
      <p>Add an item to the list</p>
      <form onSubmit={this.formSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.inputUpdate}
          ></input>
          <button onClick={this.formSubmit}>
            Add to List
          </button>
        </form>

        <ul>
          {this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        {console.log(this.state.items)}
      </div>
    );
  }

export default App;



// render(){
//   return (
//     <div className="App">
//       <input type="text" onChange={this.handleChange}/>
//     </div>
//   );
// }
// }

// export default App;

//Example from class to use:







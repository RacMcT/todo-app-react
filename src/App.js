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



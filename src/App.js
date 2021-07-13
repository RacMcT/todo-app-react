import React  from 'react';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      isClicked: false, 
      todos:[],
      text: ''
    }
    // this.handleChange = this.handleChange.bind(this);

  }

  componentDidUpdate() {
    console.log(this.text);
  }

 handleChange = (event) => {
//   console.log(event.target.value);
  this.setState({
    text: event.target.value
  })
}

render(){
  return (
    <div className="App">
      <input type="text" onChange={this.handleChange}/>
    </div>
  );
}
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       Hello ACA!
//     </div>
//   );
// }

// export default App;

import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monstors: []
    }
  }

  componentDidMount(){
    // When the page load we do api request
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(
      ()=> {
        return {monstors : users}
    },
    () => {
      console.log(this.state)
    }
    ))
  }

  render() {
    return (
      <div className="App">
        {this.state.monstors.map((monstor) => (
          <div key={monstor.id}>
            <p>{monstor.name}</p>
          </div>
        ))}
      </div>
    );
  }
  
}

export default App;

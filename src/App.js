import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      monstors: [],
      searchField: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    // When the page load we do api request
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monstors: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChanges = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render");

    const { monstors, searchField } = this.state;
    const { onSearchChanges } = this;

    const filteredMonstor = monstors.filter((monstor) => {
      return monstor.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input
          className="searchBox"
          type="search"
          placeholder="Search Monstors"
          onChange={onSearchChanges}
        />
        {filteredMonstor.map((monstor) => (
          <div key={monstor.id}>
            <p>{monstor.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

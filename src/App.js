import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

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
        <CardList monstors={filteredMonstor} />
      </div>
    );
  }
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [monstors, setMonstors] = useState([]);
  const [filteredMonstor, setFilteredMonstor] = useState(monstors);

  console.log(searchField);
  // Rerunder the function when the value of a state changes...

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonstors(users));

    //We Pass state like monstors or a props if we need to rerunder the function
    //otherwise leve it empty the useEffect is run only one.
  }, []);

  useEffect(() => {
    const newFilteredMonstor = monstors.filter((monstor) => {
      return monstor.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonstor(newFilteredMonstor);
  }, [monstors, searchField]);

  const onSearchChanges = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="title">Monstors Rolodex</h1>
      <SearchBar
        className="search-box"
        placeholder="Search Monstors"
        onChangeHandler={onSearchChanges}
      />
      <CardList monstors={filteredMonstor} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     console.log("constructor");
//     super();
//     this.state = {
//       monstors: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     // When the page load we do api request
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monstors: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChanges = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     console.log("render");

//     const { monstors, searchField } = this.state;
//     const { onSearchChanges } = this;

//     const filteredMonstor = monstors.filter((monstor) => {
//       return monstor.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="title">Monstors Rolodex</h1>
//         <SearchBar
//           className="search-box"
//           placeholder="Search Monstors"
//           onChangeHandler={onSearchChanges}
//         />
//         <CardList monstors={filteredMonstor} />
//       </div>
//     );
//   }
// }

export default App;

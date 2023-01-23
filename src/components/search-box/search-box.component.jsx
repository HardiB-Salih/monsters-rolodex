import React from "react";
import "./search-box.styles.css";

const SearchBar = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={className}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

// class SearchBar extends Component {
//   render() {
//     const { className, placeholder, onChangeHandler } = this.props;
//     return (
//       <input
//         className={className}
//         type="search"
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBar;

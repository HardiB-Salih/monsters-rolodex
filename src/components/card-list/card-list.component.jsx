import { Component } from "react";

class CardList extends Component {
  render() {
    const { monstors } = this.props;
    return (
      <div>
        {monstors.map((monstor) => (
          <div key={monstor.id}>
            <p>{monstor.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;

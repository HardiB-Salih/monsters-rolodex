import "./card.styles.css";

const CardList = ({ monstors }) => (
  <div className="card-list">
    {monstors.map((monstor) => (
      <div key={monstor.id} className="card-container">
        <img
          alt={`monster ${monstor.name}`}
          src={`https://robohash.org/${monstor.id}?set=set2@size=180x180`}
        />
        <h2>{monstor.name}</h2>
        <p>{monstor.email}</p>
      </div>
    ))}
  </div>
);

// class CardList extends Component {
//   render() {
//     const { monstors } = this.props;

//     return (
//       <div className="card-list">
//         {monstors.map((monstor) => (
//           <div key={monstor.id} className="card-container">
//             <img
//               alt={`monster ${monstor.name}`}
//               src={`https://robohash.org/${monstor.id}?set=set2@size=180x180`}
//             />
//             <h2>{monstor.name}</h2>
//             <p>{monstor.email}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

export default CardList;

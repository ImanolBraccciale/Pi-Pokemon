import Card from "../Card/card.component"
import { Link } from "react-router-dom";

function Cards({ allPokemons }) {
  return (
    <div>
      {allPokemons?.map((pokemon) => (
        <Link to={`/home/${pokemon.id}`} key={pokemon.id}>
          <Card pokemon={pokemon} />
        </Link>
      ))}
    </div>
  );
}
export default Cards
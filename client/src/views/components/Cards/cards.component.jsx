import Card from "../Card/card.component"

function Cards({ allPokemons }) {

  const pokeList = allPokemons

  return (
    <div>
      {pokeList?.map((pokemon) => (
        <Card pokemon={pokemon} key={pokemon.id} id={pokemon.id} />
      ))}
    </div>
  )
}

export default Cards
import Card from "../Card/card.component"

function Cards({ allPokemons }) {

  const pokeList = allPokemons

  return (
    <div>
      {pokeList?.map((pokemon) => (
        <Card Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default Cards
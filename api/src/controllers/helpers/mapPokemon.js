 const mapPokemon = (pokemons) => {

    const { id, name, sprites, stats, height, weight,types } = pokemons;
 const regex = /type\/(\d+)\//

const newTypes = types.map(({type}) => {
       const id = type.url.match(regex)[1]
        return {
          id : parseInt(id),
          name : type.name
        }
    } );
     return {
      id,
      name,
      sprites: sprites?.other?.['official-artwork']?.front_default,
      hp:stats[0].base_stat,
      attack:stats[1].base_stat,
      defense:stats[2].base_stat,
      speed:stats[5].base_stat,
      height,
      weight,
      //que busque en el array todos los tipos que tenga y traer el nombre
      types: newTypes
     }
  }

module.exports = mapPokemon

 
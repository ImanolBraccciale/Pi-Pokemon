const mapPokemonDB = (pokemons) => {

    const { id, name, sprites, height, weight,type1,type2 } = pokemons;

     return {
      id,
      name,
      sprites,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      //que busque en el array todos los tipos que tenga y traer el nombre
       type1,
       type2
     }
  }

module.exports = mapPokemonDB

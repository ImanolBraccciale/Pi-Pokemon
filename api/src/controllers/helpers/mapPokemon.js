 const mapPokemon = (pokemons) => {

    const { id, name, sprites, stats, height, weight,types } = pokemons;

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
      types:types?.map((t) => t.type.name).join( " & ")
     }
  }

module.exports = mapPokemon


//VERSION DE EMA PUTO

// async function getPokemon(req, res) {
//   try {
//     let params;
//     if (req.params.hasOwnProperty("id")) {
//       params = req.params.id;
//     }
//     if (req.query.hasOwnProperty("name")) {
//       params = req.query.name;
//     }
//     const data = await httpRequest(`${URL_API_NAME}${params}`); //solicitud axios

//     if (data?.message) throw Error(data.message);

//     const pokemon = formatPokemonBuilder(data); //saca las cosas que no uso del la respuesta de la api.
//     res.status(200).json(pokemon);
//   } catch (error) {
//     res.status(404).json(error.message);
//   }
// }
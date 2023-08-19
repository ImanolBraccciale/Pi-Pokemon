const axios = require("axios");
const Pokemon = require("../db");
const mapPokemon = require("./helpers/mapPokemon");

const getPokemonByName = async (req ) => {
 
  let params;
  let poke = [];
  let pokemon;

if (req.query.hasOwnProperty("name")) {
        params = req.query.name;

        try {
          //api
          const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${params}`)
          pokemon= data

          //base de datos
          if (pokemon?.message) {
            pokemon=  await Pokemon.findAll({ where: { name: params } });
          }
         let pok = mapPokemon(pokemon);
          poke.push(pok);
         return poke;

        } catch (error) {
          return error;
        }
}
}
module.exports = getPokemonByName;

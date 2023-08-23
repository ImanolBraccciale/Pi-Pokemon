const axios = require("axios");
const { Pokemon, Type } = require("../db");
const mapPokemon = require("./helpers/mapPokemon");

const getPokemonByName = async (req, res) => {
 
        let { name } = req.query;

            let searchPokeNameDB = await Pokemon.findAll({
                where: { name:name },
                include: { model: Type, attributes: ['name',"id"], through: { attributes: [] } }
            });
          if (searchPokeNameDB.length ) {
            return searchPokeNameDB
          }

            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            let pokemon = data;

            if (pokemon) {
              let poke = []
                let pok = mapPokemon(pokemon);
                poke.push(pok)
                return poke;
            }

 
};

module.exports = getPokemonByName;
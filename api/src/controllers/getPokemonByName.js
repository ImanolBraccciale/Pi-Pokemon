const axios = require("axios");
const { Pokemon, Type } = require("../db");
const mapPokemon = require("./helpers/mapPokemon");

const getPokemonByName = async (req, res) => {
 
        let { name } = req.query;
        try {
            let searchPokeNameDB = await Pokemon.findAll({
                where: { name:name },
                include: { model: Type, as: 'pokemonTypes', attributes: ['name',"id"], through: { attributes: [] } }
            });
          if (searchPokeNameDB.length ) {
            return searchPokeNameDB
          }

            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            let pokemon = data;

            if (pokemon) {
                let pok = mapPokemon(pokemon);
                return pok;
            }

            return res.status(404).json({ error: "Pokemon not found" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
};

module.exports = getPokemonByName;
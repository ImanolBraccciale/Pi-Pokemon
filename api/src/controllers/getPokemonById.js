const { Pokemon, Type } = require("../db");
const mapPokemon = require("./helpers/mapPokemon");
const axios = require("axios");

const getPokemonById = async (req) => {
  const { id } = req.params;
 
    if (isNaN(id)) {
      //este findALL trae un array, el findOne trae un objeto
      const [pokemonDB] = await Pokemon.findAll({
        where: { id:id },
        include: { model: Type, attributes: ['name',"id"], through: { attributes: [] } }
      });
      return  pokemonDB // Enviar la respuesta al cliente
    } else {
      const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const resp = mapPokemon(data);
      return resp
    }
};

module.exports = getPokemonById;
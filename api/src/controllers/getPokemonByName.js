const axios = require("axios");
const { Pokemon, Type, Op } = require("../db"); // Import Op from Sequelize
const mapPokemon = require("./helpers/mapPokemon");

const getPokemonByName = async (req, res) => {
  try {
    let { name } = req.query;
    name = name.toLowerCase()

    let searchPokeNameDB = await Pokemon.findAll({
      where: {
        name: {[Op.iLike]: name}
      },
      include: { model: Type, attributes: ['name', "id"], through: { attributes: [] } }
    });

    if (searchPokeNameDB.length) {
      return searchPokeNameDB;
    }

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = data;

    if (pokemon) {
      const pok = mapPokemon(pokemon);
      return [pok];  
    }
    return []; // Returning an empty array if no data found

  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return res.status(500).json({ error: 'Error fetching Pokemon data' });
  }
};

module.exports = getPokemonByName;

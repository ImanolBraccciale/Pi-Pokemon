const mapPokemon = require("./helpers/mapPokemon");
const { Pokemon, Type } = require("../db");
const axios = require("axios");

const getAllPokemons = async () => {
    const pokemonsDb = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ["name","id"],
            through: {
                attributes: [],
            },
        },
    });

    const pokemonsFromApi = []; 
    
    let nextPageUrl = "https://pokeapi.co/api/v2/pokemon"; 

    while (pokemonsFromApi.length < 200 + pokemonsDb.length) {
        const response = await axios.get(nextPageUrl);
        const pokemonsOnPage = response.data.results; 
        nextPageUrl = response.data.next; 

        pokemonsFromApi.push(...pokemonsOnPage); //los meto en el array
    }

    const additionalPokemonDetails = await Promise.all(
        pokemonsFromApi.map(async (pokemon) => {
            const response = await axios.get(pokemon.url);
            return mapPokemon(response.data);
        })
    );

    return [...pokemonsDb, ...additionalPokemonDetails];
};

module.exports = getAllPokemons;

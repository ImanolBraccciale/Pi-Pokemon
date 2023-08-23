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

    const pokemonsFromApi = []; //aca guardo mis pokemones y los nuevos
    
    let nextPageUrl = "https://pokeapi.co/api/v2/pokemon"; // esta es al primera pagina

    while (pokemonsFromApi.length < 200 + pokemonsDb.length) {
        const response = await axios.get(nextPageUrl);
        const pokemonsOnPage = response.data.results; //el objeto con los pokemons de la pagina actual
        nextPageUrl = response.data.next; // URL de la próxima página (si existe)

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

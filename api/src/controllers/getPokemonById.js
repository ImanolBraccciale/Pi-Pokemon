const { Pokemon, Type } = require("../db");
const mapPokemon = require("./helpers/mapPokemon");
const axios = require("axios");

const getPokemonById = async (req, res) => {
  const { id } = req.params;
  try {
    if (id.length > 5) {
      const dbPokeID = await Pokemon.findByPk(id, {
        include: [
          {
            model: Type,
            as: "pokemonTypes",
            attributes: ["name"],
            through: { 
              attributes: []
            }
          }
        ]
      });
        return res.status(200).json(dbPokeID);
      // }
    } else {
      const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const resp = mapPokemon(data);
      return resp;
    }
  } catch (error) {
    return res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = getPokemonById;


//   try {


//     const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

//     if (data?.message) {
//         data = await Pokemon.findByPk(req.params.id, {
//         include: [
//           {
//             model: Type,
//             as: "pokemonTypes",
//             attributes: ["name"],
//             through: {
//               attributes: []
//             }
//           }
//         ]
//       });
//            poke = mapPokemon(data);
//       // Combinar la información del API con la información de la base de datos
//       if (data) {
//         poke.types = data.pokemonTypes.map((type) => type.name);
//       }
//       console.log(poke);
//     }
//     return poke;
//   } catch (error) {
//     return error;
//   }
// };

module.exports = getPokemonById;

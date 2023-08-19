const { Pokemon, Type } = require("../db");

const createPokemonDb = async ({ id, name, image, hp, attack, defense, speed, height, weight, type1, type2 }) => {

  const typePokemon1 = await Type.findByPk(type1);

  if (!typePokemon1) {
    throw new Error(`Type with ID ${type1} not found.`);
  }

  const typePokemon2 = type2 ? await Type.findByPk(type2) : null;

  if (type2 && !typePokemon2) {
    throw new Error(`Type with ID ${type2} not found.`);
  }

  const pokemon = await Pokemon.create(
    {
      id,
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    }
  );
  if (typePokemon1) {
    await pokemon.addPokemonType(typePokemon1);
  }
  if (typePokemon2) {
    await pokemon.addPokemonType(typePokemon2);
  }
  console.log(pokemon);
  pokemon.save()

return pokemon

  //   return await Pokemon.findByPk(id, {
  //   include: [
  //     {
  //       model: Type,
  //       as: "pokemonTypes",
  //       attributes: ["name"],
  //       through: { attributes: [] },
  //     },
  //   ],
  // });
};

module.exports = createPokemonDb;

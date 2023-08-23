const { Pokemon, Type } = require("../db");

const createPokemonDb = async ({ id, name, sprites, hp, attack, defense, speed, height, weight, type1, type2 }) => {
  try {
    // Buscar los tipos en la base de datos
    const typePokemon1 = type1 ? await Type.findByPk(type1) : null;

    if (!typePokemon1) {
      throw new Error(`Tipo con ID ${type1} no encontrado.`);
    }

    const typePokemon2 = type2 ? await Type.findByPk(type2) : null;

    if (type2 && !typePokemon2) {
      throw new Error(`Tipo con ID ${type2} no encontrado.`);
    }

    // Crear el registro del Pokémon
    const pokemon = await Pokemon.create({
      id,
      name,
      sprites,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    // Asociar tipos al Pokémon
    if (typePokemon1) {
      await pokemon.addType(typePokemon1);
    }
    if (typePokemon2) {
      await pokemon.addType(typePokemon2);
    }

    // Guardar los cambios en la base de datos
    await pokemon.save();

    // Concatenar nombres de tipos
    const tipos = typePokemon1.name.concat(typePokemon2 ? `, ${typePokemon2.name}` : '');

    // Devolver los datos del Pokémon y tipos
    return { ...pokemon.dataValues, tipos };
  } catch (error) {
    throw error; // Relanzar el error para manejo posterior
  }
};

module.exports = createPokemonDb;

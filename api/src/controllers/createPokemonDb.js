const { Pokemon, Type } = require("../db");

const createPokemonDb = async ( req) => {
  const { name, sprites, hp, attack, defense, speed, height, weight, types } = req.body
  try {

      const numericHp = Number(hp);
  const numericAttack = Number(attack);
  const numericDefense = Number(defense);
  const numericSpeed = Number(speed);
  const numericHeight = Number(height);
  const numericWeight = Number(weight);


    const newTypes = await Promise.all(types.map(async (typeId) => {
      const foundType = await Type.findByPk(typeId);
      if (foundType) {
        return foundType;
      }
      return null;
    }));

    console.log(newTypes);
 const pokemon = await Pokemon.create({
      name,
      sprites,
      hp: numericHp,
      attack: numericAttack,
      defense: numericDefense,
      speed: numericSpeed,
      height: numericHeight,
      weight: numericWeight,
    });


    for (const type of newTypes) {
      if (type) {
        await pokemon.addType(type); // Asociar el tipo al Pokémon
      }
    }
           let searchPokeNameDB = await Pokemon.findAll({
                where: { name:name },
                include: { model: Type, attributes: ['name',"id"], through: { attributes: [] } }
            });
          if (searchPokeNameDB.length ) {
            return searchPokeNameDB
          }
    return pokemon;
  } catch (error) {
    throw error;
  }
};

module.exports = createPokemonDb;

  const {Type} = require("../db.js")
  const axios = require("axios")
const getAllTypes = async () => {
  
  const typedb = await Type.findAll();

  if (typedb.length === 0) {
    const infoApi = (await axios.get("https://pokeapi.co/api/v2/type")).data.results;
    const typeRecords = infoApi.map((type, index) => ({ id: index + 1, name: type.name }));
    //bulkCreate mete registros en la tabla
    await Type.bulkCreate(typeRecords);
    return infoApi;
  }

  return typedb;
};

module.exports =getAllTypes
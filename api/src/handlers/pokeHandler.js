 
const getAllPokemons   = require("../controllers/getAllPokemons")
const  getPokemonById  = require("../controllers/getPokemonById")
const  getPokemonByName  = require("../controllers/getPokemonByName")
const createPokemon   = require("../controllers/createPokemonDb")

const getPokemonHandler = async ( req,res) => {
  const {name} = req.query;

try {
  const response = name ? await getPokemonByName(name) : await getAllPokemons()
          res.status(200).json(response);
    } catch (error) {
  return res.status(500).json({error:error.message})
}
}

const getDetailHandler = async ( req, res) => {

   try {
      const response = await getPokemonById(req,res)
      return res.status(200).json(response)
  } catch (error) {
     return res.status(500).json({ message: `Error al buscar el Pokemon con ese id ${error.message}` })
  }
}

const getNameHandler = async ( req, res) => {

  try {
    const response = await getPokemonByName(req);
    return res.status(200).json(response);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error al buscar el Pokemon con ese nombre: ${error.message}` });
  }

}

const createPokeHandler = async (req,res) => {

 
try {
  const newPokemon = await createPokemon(req)

  return res.status(200).json(newPokemon)
} catch (error) {
  return res.status(500).json({Error:error.message})
}
}

module.exports = {
  getPokemonHandler,
  getDetailHandler,
  createPokeHandler,
  getNameHandler
}


//fijarme si la req tiene id o name,  si tiene id urilizo la api. SI tiene  name utilizo la base de datos y luego la api
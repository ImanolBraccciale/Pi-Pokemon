const { Router } = require("express");
const {
  getNameHandler,
  getPokemonHandler,
  getDetailHandler,
  createPokeHandler
} = require('../handlers/pokeHandler')
const { getAllTypesHandler } = require("../handlers/typeHandler")

const pokeRouter =Router();


pokeRouter.get("/pokemons/name", getNameHandler); 
pokeRouter.get("/pokemons/:id", getDetailHandler); 
pokeRouter.get("/pokemons", getPokemonHandler);
pokeRouter.post("/pokemons", createPokeHandler);
pokeRouter.get("/types", getAllTypesHandler);

module.exports= pokeRouter


 
 
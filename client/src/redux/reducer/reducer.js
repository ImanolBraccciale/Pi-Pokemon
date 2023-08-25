
let initialState= {allPokemon:[],allPokemonCopy:[], types:[], detail:[]}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMON":
      return {
        ...state,
        allPokemon: action.payload,
        allPokemonCopy: action.payload,
        detail: []
      }
      case "GET_TYPES":
      return {
        ...state,
        types : action.payload
      }
      case "FILTER_BY_TYPE":
      const typeFiltered = action.payload;
      
      const filteredPokemon = state.allPokemonCopy.filter(
        (pokemon) =>
          pokemon.types.some(({id}) =>{

            return id === parseInt(typeFiltered)
            }) 
      );

      if (filteredPokemon.length <= 0) {
        return {
          ...state,
          allPokemon:state.allPokemonCopy
        }
      }
      return {
        ...state,
        allPokemon: filteredPokemon,
      };
    case "GET_POKEMON_NAME":
      return {
        ...state,
        allPokemon: action.payload
      }
      case "ORDER_BY_ATTACK":
        //como en los otros filtros retorno el modificacion en allPokemon, hago una copia de este y la utilizo asi se mezclar los filtros. Tengo que usar el spread Operator para que los cambios que haga no afecten a la matriz original
      let pokemons =[...state.allPokemon]
 
      let sortedPokemon = action.payload === "asc" ?
      pokemons.sort((a,b) => a.attack - b.attack) :
      pokemons.sort((a,b) => b.attack - a.attack) 

      return {
        ...state,
        allPokemon: sortedPokemon,
      }
      case "ORDER_BY_NAME":
        let pokemonsName= [...state.allPokemon]

        let sortedPokeName = action.payload === "asc" ? 
        pokemonsName.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())) :
        pokemonsName.sort((a,b)=> b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
        return{
          ...state,
          allPokemon:sortedPokeName
        }
case "FILTER_BY_ORIGIN":
        let pokemonOrigin = [...state.allPokemonCopy]
        let createdFiltered;

        if (action.payload ==="custom") {
          createdFiltered =pokemonOrigin.filter(pokemon => pokemon.custom)
        }else if (action.payload === "api") {
          createdFiltered =pokemonOrigin.filter(pokemon => !pokemon.custom)
        } else {
          createdFiltered=pokemonOrigin
        }
        return {
          ...state,
          allPokemon: createdFiltered
        }
    case "POSTED_POKEMON":
      return {
        ...state,
        
      }

    default:
      return state;
  }
}

export default rootReducer;


let initialState= {allPokemon:[],allPokemonCopy:[], types:[], detail:[],}

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
        case "FILTER_BY_ORIGIN_AND_TYPE":
  const { origin, type } = action.payload;  
  
  let filteredPokemonOrigin = [...state.allPokemonCopy];
  let combinedFilteredPokemon = filteredPokemonOrigin;

  if (origin === "custom") {
    combinedFilteredPokemon = combinedFilteredPokemon.filter(pokemon => pokemon.hasOwnProperty("custom"));
  } else if (origin === "api") {
    combinedFilteredPokemon = combinedFilteredPokemon.filter(pokemon => !pokemon.hasOwnProperty("custom"));
  }

if (type && type !== "all") {
  combinedFilteredPokemon = combinedFilteredPokemon.filter(pokemon =>
    pokemon.types.some(({ id }) => id === parseInt(type))
  );
}


  return {
    ...state,
    allPokemon: combinedFilteredPokemon
  };

    case "POSTED_POKEMON":
      return {
        ...state,
        
      }
    case "GET_POKEMON_DETAIL":
      return {
        ...state,
        detail:action.payload
      }
      

    default:
      return state;
  }
}

export default rootReducer;

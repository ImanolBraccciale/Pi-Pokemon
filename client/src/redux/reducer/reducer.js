
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
        alert("No hay Pokémon de ese tipo");
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
      console.log(sortedPokemon);
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

    // case "POST_POKEMON":
    //   return {
    //     ...state,
    //   }
    // case "GET_POKEMON_DETAIL":
    //   return {
    //     ...state,
    //     detail: action.payload
    //   }
    // case "FILTER_CREATED":
    //   let copy = state.allPokemonCopy;
    //   let createdFiltered;

    //   if (action.payload === "created") {
    //     createdFiltered = copy.filter(pokemon => pokemon.custom);
    //   } else {
    //     createdFiltered = copy.filter(pokemon => !pokemon.custom);
    //   }

    //   return {
    //     ...state,
    //     allPokemon: action.payload === "all" ? state.allPokemonCopy : createdFiltered
    //   }
    // case "ORDER_BY_NAME":
    //   let sortedName;
    //   if (action.payload === "asc") {
    //     sortedName = state.allPokemon.slice().sort((a, b) => a.name.localeCompare(b.name));
    //   }
    //   if (action.payload === "des") {
    //     sortedName = state.allPokemon.slice().sort((a, b) => b.name.localeCompare(a.name));
    //   }
    //   return {
    //     ...state,
    //     allPokemon: sortedName
    //   }
    default:
      return state;
  }
}

export default rootReducer;

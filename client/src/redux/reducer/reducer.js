
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
    // case "GET_POKEMON_NAME":
    //   return {
    //     ...state,
    //     allPokemon: action.payload
    //   }
    // case "POST_POKEMON":
    //   return {
    //     ...state,
    //   }
    // case "GET_POKEMON_DETAIL":
    //   return {
    //     ...state,
    //     detail: action.payload
    //   }
    // case "ORDER_BY_ATTACK":
    //   let sortedByAttack = [];

    //   if (action.payload === "HAttack") {
    //     sortedByAttack = state.allPokemon.slice().sort(function (a, b) {
    //       return b.attack - a.attack;
    //     });
    //   } else if (action.payload === "LAttack") {
    //     sortedByAttack = state.allPokemon.slice().sort(function (a, b) {
    //       return a.attack - b.attack;
    //     });
    //   }

    //   return {
    //     ...state,
    //     allPokemon: sortedByAttack
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

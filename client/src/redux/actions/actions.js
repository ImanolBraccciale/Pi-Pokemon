import axios from "axios";



export function getPokemon() {
  return async function (dispatch) {
    const response = await axios("/pokemons")
    
    return dispatch({
      type: "GET_POKEMON",
      payload:response.data
    })
  }
}

export function getTypes() {
  return async function (dispatch) {
    const response = await axios("/types")
    return dispatch({
      type:"GET_TYPES",
      payload:response.data
    })
  }
}

 export function filterByOriginAndType(origin, type) {
  return {
    type: "FILTER_BY_ORIGIN_AND_TYPE",
    payload: {
      origin,
      type,
    },
  };
}


export function getPokemonByName(name) {
  return async function (dispatch) {
    const response =await axios(`/pokemons/name?name=${name}`)

    return dispatch({
      type:"GET_POKEMON_NAME",
      payload:response.data
    })
  }
}

export function orderByAttack(payload) {
  return {
    type :"ORDER_BY_ATTACK" ,  
     payload
  }
}

export function orderByName(payload) {
  return {
    type :  'ORDER_BY_NAME',
    payload
  }

}

 //aaaaaaaaaaaaaaa

export function postedPokemon(payload) {
  return async function (dispatch) {
    try {
 
      console.log(payload);
      const response = await axios.post("/pokemons", payload);

 
      return dispatch({
        type: "POSTED_POKEMON", 
        payload: response.data,
      });
    } catch (error) {
    return error.message
    }
  };
}

export function getPokemonDetail(id) {
  return async function (dispatch) {
    const response = await axios.get(`/pokemons/${id}`)
    console.log(response);
    return dispatch({
      type:"GET_POKEMON_DETAIL",
      payload:response.data,
    })
  }
 }

 
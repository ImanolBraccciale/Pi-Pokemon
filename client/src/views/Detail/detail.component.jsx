import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getPokemonDetail } from "../../redux/actions/actions";


function Detail(pokemon) {

  const dispatch = useDispatch()
  const pokemonID = useSelector(state => state.detail)

  console.log(pokemon.match.params.id);
  useEffect(() => {

    dispatch(getPokemonDetail(pokemon.match.params.id))
    console.log(dispatch(getPokemonDetail(pokemon.match.params.id)), "dispatch");
  }, [dispatch, pokemon.match.params.id])

  return (
    <div className="detail">
      <p>Este es el detail</p>
      <h1>Name:{pokemonID.name}</h1>
      <p>Hit Points:{pokemonID.hp}</p>
      <p>Attack:{pokemonID.attack}</p>
      <p>Defense:{pokemonID.defense}</p>
      <p>Speed:{pokemonID.speed}</p>
      <p>Height:{pokemonID.height}</p>
      <p>Weight:{pokemonID.weight}</p>
    </div>
  )
}

export default Detail
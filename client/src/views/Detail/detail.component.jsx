import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getPokemonDetail } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import "./detail.css";

function Detail(pokemon) {

  const dispatch = useDispatch()
  const pokemonID = useSelector(state => state.detail)
  const types = pokemonID.types || [];
  const typesString = types.map(type => type.name).join(', ');

  useEffect(() => {
    dispatch(getPokemonDetail(pokemon.match.params.id))
  }, [dispatch, pokemon.match.params.id])
  return (
    <div className="pokedex">
      <div className="detail">
        <Link to="/home">
          <button className='buttonDetail' >back</button>
        </Link>
        <img src={pokemonID.sprites} alt="Pokemon Sprite" />
        <div className="properties-column">
          <p>Hit Points: {pokemonID.hp}</p>
          <p>Attack: {pokemonID.attack}</p>
          <p>Defense: {pokemonID.defense}</p>
        </div>
        <div className="properties-column">
          <p>Speed: {pokemonID.speed}</p>
          <p>Height: {pokemonID.height}</p>
          <p>Weight: {pokemonID.weight}</p>
        </div>
        <h3>{pokemonID.name}</h3>
        <p className='types'>Types: {typesString}</p>

      </div>
    </div>
  )
}

export default Detail
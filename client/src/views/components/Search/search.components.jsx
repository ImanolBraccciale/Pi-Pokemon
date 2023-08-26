import React, { useState } from "react";
import { getPokemonByName, getPokemon } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";
import "./search.css";

function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    if (event.target.value === "") {
      dispatch(getPokemon);
    }
    setName(event.target.value);
  };

  const handleSearch = () => {
    dispatch(getPokemonByName(name));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (name.length !== 0) {
      handleSearch();
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleOnSubmit} className="search-form">
        <input
          type="search"
          onChange={handleChange}
          value={name}
          placeholder="Ingrese un nombre de Pokémon"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Search;

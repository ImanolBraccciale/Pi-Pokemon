import React, { useState } from "react";
import { getPokemonByName, getPokemon } from "../../../redux/actions/actions"
import { useDispatch } from "react-redux";
function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("")

  const handleChange = (event) => {

    if (event.target.value === "") {
      dispatch(getPokemon)
    }
    setName(event.target.value)
  }

  const handleSearch = () => {
    dispatch(getPokemonByName(name))
  }
  const handleOnSubmit = (event) => {
    event.preventDefault()
    if (name.length !== 0) {
      handleSearch()
    }
  }

  return (
    <div className="search-box">

      <div>
        <form onSubmit={handleOnSubmit}>

          <input
            type="search"
            onChange={handleChange}
            value={name}
            placeholder='Ingrese un nombre de pokemon'
          />
          <button type="submit">
            Buscar
          </button>
        </form>
      </div>

    </div>
  )
}

export default Search

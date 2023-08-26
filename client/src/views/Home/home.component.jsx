import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, getTypes } from "../../redux/actions/actions";
import Navbar from "../components/Navbar/navbar.component";
import Cards from "../components/Cards/cards.component"

function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemon)

  useEffect(() => {
    // Cargar los Pokémon al montar la página
    dispatch(getPokemon());
    dispatch(getTypes())
  }, [dispatch]);

  return (
    <div className="home">
      <h1>Bienvenido a la Pokédex</h1>
      <Navbar />
      <Cards allPokemons={allPokemons} />

    </div>
  );
}

export default Home;

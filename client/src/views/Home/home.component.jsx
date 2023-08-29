// Home.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, getTypes } from "../../redux/actions/actions";
import Navbar from "../components/Navbar/navbar.component";
import Cards from "../components/Cards/cards.component";
import Pagination from "../components/Pagination/pagination.componente";
import "./home.css";

function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemon);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokeXPage, setPokeXPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokeXPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokeXPage;
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  const totalPages = Math.ceil(allPokemons.length / pokeXPage);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage, allPokemons.length]);

  useEffect(() => {
    dispatch(getPokemon());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div>
      <div className="home">
        <Navbar />
        <div className="content">
          <h1>Welcome To Pokedex</h1>
          <Cards currentPokemons={currentPokemons} />
          <Pagination
            pagination={pagination}
            allPokemons={allPokemons.length}
            pokeXPage={pokeXPage}
            page={currentPage}
            totalPages={totalPages}
          />
          <div className="pagination-buttons">
            <button
              className="pagination-button"
              onClick={goToFirstPage}
              disabled={currentPage === 1}
            >
              First Page
            </button>
            <button
              className="pagination-button"
              onClick={goToLastPage}
              disabled={currentPage === totalPages}
            >
              Last Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;

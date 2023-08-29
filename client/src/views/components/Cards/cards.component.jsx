import React from "react";
import Card from "../Card/card.component";
import { Link } from "react-router-dom";
import "./cards.css"; // Agrega tus estilos CSS aquí
import Loader from "../Loader/loader"
function Cards({ currentPokemons }) {
  return (
    <>
      {currentPokemons.length > 0 ?
        <div className="cards-container">
          {currentPokemons?.map((pokemon) => (
            <Link to={`/home/${pokemon.id}`} key={pokemon.id} className="card-link">
              <Card pokemon={pokemon} />
            </Link>
          ))}
        </div>
        : <Loader />
      }
    </>
  );
}

export default Cards;

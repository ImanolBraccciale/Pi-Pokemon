import React from "react";
import Card from "../Card/card.component";
import { Link } from "react-router-dom";
import "./cards.css"; // Agrega tus estilos CSS aquí

function Cards({ currentPokemons }) {
  return (
    <div className="cards-container">
      {currentPokemons?.map((pokemon) => (
        <Link to={`/home/${pokemon.id}`} key={pokemon.id} className="card-link">
          <Card pokemon={pokemon} />
        </Link>
      ))}
    </div>
  );
}

export default Cards;

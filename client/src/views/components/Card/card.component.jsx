import React from "react";
import "./card.css"; // Agrega tus estilos CSS aquí

function Card({ pokemon }) {
  const { name, sprites, types } = pokemon;

  return (
    <div className="card">
      <img src={sprites} alt={`${name} Img`} className="card-image" />
      <h2 className="card-title">{name}</h2>
      <div className="card-types">
        {types.map((type) => (
          <p key={type.id} className={`card-type ${type.name}`}>
            {type.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import "./pagination.css"; // Add your CSS styles here

const Pagination = ({ pagination, page, allPokemons, pokeXPage }) => {
  let totalPage = [];
  for (let i = 0; i < Math.ceil(allPokemons / pokeXPage); i++) {
    totalPage.push(i + 1);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination-list">

        {totalPage.map((num) => (
          <li key={num} className="pagination-item">
            <button
              className={`pagination-button ${page === num ? "active" : ""}`}
              onClick={() => pagination(num)}
            >
              {num}
            </button>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Pagination;

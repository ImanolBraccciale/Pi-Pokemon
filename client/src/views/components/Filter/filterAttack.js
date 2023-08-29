// FilterAttack.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByAttack } from "../../../redux/actions/actions";
import "./css/filter.css"; // Importar los estilos CSS

const FilterAttack = () => {
  const [selectedAttack, setSelectedAttack] = useState();
  const dispatch = useDispatch();

  const handleAttackChange = (event) => {
    const attack = event.target.value;
    setSelectedAttack(attack);
    dispatch(orderByAttack(attack));
  };

  return (
    <div className="filter">
      <label>Attack:</label>
      <select onChange={handleAttackChange} value={selectedAttack}>
        <option value="asc">Ascendente</option>
        <option value="des">Descendente</option>
      </select>
    </div>
  );
}

export default FilterAttack;

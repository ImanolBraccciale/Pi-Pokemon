// FilterName.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByName } from "../../../redux/actions/actions";
import "./css/filter.css"; // Importar los estilos CSS

const FilterName = () => {
  const dispatch = useDispatch();
  const [selectedName, setSelectedName] = useState();

  const handleNameChange = (event) => {
    const name = event.target.value;
    setSelectedName(name);
    dispatch(orderByName(name));
  };

  return (
    <div className="filter"> {/* Aplicar la clase "filter" aquí */}
      <label>Name:</label>
      <select onChange={handleNameChange} value={selectedName}>
        <option value="asc">Ascendente</option>
        <option value="des">Descendente</option>
      </select>
    </div>
  );
}

export default FilterName;

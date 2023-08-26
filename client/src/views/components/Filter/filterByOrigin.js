// FilterByOrigin.js (y similares)
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByOrigin } from "../../../redux/actions/actions"; // Importar la acción correspondiente
import "./css/filter.css"; // Importar los estilos CSS

const FilterByOrigin = () => {
  const dispatch = useDispatch();
  const [selectedOrigin, setSelectedOrigin] = useState("");

  const handleOriginChange = (event) => {
    const origin = event.target.value;
    setSelectedOrigin(origin);
    dispatch(filterByOrigin(origin)); // Usar la acción adecuada
  };

  return (
    <div className="filter">
      <label>Origen:</label>
      <select onChange={handleOriginChange} value={selectedOrigin}>
        {/* Agregar las opciones aquí */}
      </select>
    </div>
  );
}

export default FilterByOrigin;

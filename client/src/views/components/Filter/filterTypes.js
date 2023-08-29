import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterType } from "../../../redux/actions/actions";
import "./css/filter.css"; // Importar los estilos CSS

const FilterComponent = () => {
  const [selectedType, setSelectedType] = useState("all");
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.types);

  const handleFilterChange = (event) => {
    event.preventDefault();
    const typeId = event.target.value;
    setSelectedType(typeId);
    dispatch(filterType(typeId));
  };

  return (
    <div className="filter">
      <label>Types:</label>
      <select onChange={(e) => handleFilterChange(e)} value={selectedType}>
        <option value="all">All</option>
        {allTypes.map((type) => (
          <option
            name={type.name}
            key={type.id}
            value={type.id}
         
          >
            {type.name.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;

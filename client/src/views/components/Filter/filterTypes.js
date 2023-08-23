import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterType,  } from "../../../redux/actions/actions";



const FilterComponent = () => {
    const [selectedType, setSelectedType] = useState("all");
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.types); // Asegúrate de obtener los tipos del estado

    const handleFilterChange = (event) => {
        event.preventDefault();
      const typeId = event.target.value;
      setSelectedType(typeId);
      dispatch(filterType(typeId)); // Dispara la acción para filtrar por ID de tipo
    };
    return (
      <div>
        <select onChange={(e) => handleFilterChange(e)} value={selectedType}>
          <option value="all">All</option>
          {allTypes.map((type) => (
            <option name={type.id} key={type.id} value={type.id}>
              {type.name.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    );
  };


  export default FilterComponent
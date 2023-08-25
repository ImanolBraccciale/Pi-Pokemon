
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByOrigin,  } from "../../../redux/actions/actions";



const FilterByOrigin = () => {
    const [selectedOrigin, setSelectedOrigin] = useState();
  const dispatch = useDispatch();

    const handleOriginChange = (event) => {
        event.preventDefault();
      const origin = event.target.value;
      setSelectedOrigin(origin);
      dispatch(filterByOrigin(origin)); // Dispara la acción para filtrar por ID de tipo
    };
    return (
      <div>
        <select onChange={(e) => handleOriginChange(e)} value={selectedOrigin}>
          <option value="custom">custom</option>
          <option value="api">Api</option>
          <option value="all">All</option>
        
        </select>
      </div>
    );
  };


  export default FilterByOrigin


  /*
  beatriz
  edwar
  pedro lemos
  gabriela
  juan velez
  kevin padilla
  samuel rodriguez
  */
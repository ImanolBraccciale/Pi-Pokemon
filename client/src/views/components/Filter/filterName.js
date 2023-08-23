import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {orderByName  } from "../../../redux/actions/actions";
const FilterName = () => {
  
  const dispatch= useDispatch()
  const [selectedName,setSelectedAttack] = useState()

  const handleNameChange = (event) =>{
    const name = event.target.value
    setSelectedAttack(name)
    dispatch(orderByName(name)) //agregar ela action
  }

  return (
    <div>
      <label>Nombre:</label>
      <select onChange={(event) =>handleNameChange(event)} value={selectedName}>
        <option value="asc">Ascendente</option>
        <option value="des">Descendente</option>
      </select>
    </div>
  )
}

export default FilterName
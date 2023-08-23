import React, { useState  } from "react";
import { useDispatch } from "react-redux";
import {orderByAttack} from "../../../redux/actions/actions"

const FilterAttack = () =>{

const [selectedAttack, setSelectedAttack] = useState()
const dispatch = useDispatch()

const handleAttackChange = (event) =>{
 const attack = event.target.value
 setSelectedAttack(attack)
 dispatch(orderByAttack(attack))
}

return (
  <div>
    <label>Ataque:</label>
    <select onChange={(e) =>handleAttackChange(e)} value={selectedAttack}>
      <option value="asc">Ascendente</option>
      <option value="des">Descendente</option>
    </select>

  </div>
)

}

export default FilterAttack
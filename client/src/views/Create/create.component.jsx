import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const PostPokemon = () => {
  const dispatch = useDispatch()

  const types = useSelector(
    (state) => {
      return state.types
    }
  )

  const [input, setInput] = useState({
    name: "",
    sprites: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  })

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }


  const handleCheckboxChange = (event) => {
    const selectedType = event.target.value;
    console.log(selectedType);
    if (input.types.includes(selectedType)) {
      setInput({
        ...input,
        types: input.types.filter((type) => type !== selectedType),
      });
    } else {
      setInput({
        ...input,
        types: [...input.types, selectedType],
      });
    }
  };

  return (
    <>
      <form>
        <div>

          <label>name</label>
          <input type='text' value={input.name} name='name' placeholder='name...' onChange={e => { handleChange(e) }} />

          <label>sprites</label>
          <input type="text" value={input.sprites} name='sprites' placeholder="sprites..." onChange={e => { handleChange(e) }} />

          <label>hp</label>
          <input type="number" value={input.hp} name='hp' placeholder="hp..." onChange={e => { handleChange(e) }} />

          <label>attack</label>
          <input type="number" value={input.attack} name='attack' placeholder="attack..." onChange={e => { handleChange(e) }} />

          <label>defense</label>
          <input type="number" value={input.defense} name='defense' placeholder="defense..." onChange={e => { handleChange(e) }} />

          <label>speed</label>
          <input type="number" value={input.speed} name='speed' placeholder="speed..." onChange={e => { handleChange(e) }} />

          <label>height</label>
          <input type="number" value={input.height} name='height' placeholder="height..." onChange={e => { handleChange(e) }} />

          <label>weight</label>
          <input type="number" value={input.weight} name='weight' placeholder="weight..." onChange={e => { handleChange(e) }} />
        </div>

        <div>
          {types?.map((type) => (
            <label key={type.id}>
              <input
                type="checkbox"
                value={type.id}
                checked={input.types.includes(type.id.toString())}
                onChange={handleCheckboxChange}
              />
              {type.name}
            </label>
          ))}
        </div>

      </form>

    </>
  )
}

export default PostPokemon
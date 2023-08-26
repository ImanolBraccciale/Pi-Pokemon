import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postedPokemon } from "../../redux/actions/actions";

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

    if (event.target.name === "name" || event.target.name === "sprites") {
      setInput({
        ...input,
        [event.target.name]: event.target.value
      })
    } else {
      setInput({
        ...input,
        [event.target.name]: Number(event.target.value)
      })
    }
  }

  const handleCheckboxChange = (event) => {
    const selectedType = Number(event.target.value); // Convertir el valor a número
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

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(input, "este es input");
    console.log(postedPokemon(input), "solo posted con input");
    console.log(dispatch(postedPokemon()));



    dispatch(postedPokemon(input))

  }

  // const validation = () => {
  //   let error = {};
  //   let noEmpty = /\S+/;
  //   let validateName = /^[a-zA-ZñÑ]*$/;
  //   let validateNum = /^\d+$/;
  //   let validateUrl = /^(ftp|http|https):\/\/[^ "]+$/;

  //   if (!noEmpty.name || !validateName.name || validateName.length >= 3) {

  //   }

  // }


  return (
    <>
      <form onSubmit={e => { handleSubmit(e) }}>
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
                checked={input.types.includes(type.id)}
                onChange={handleCheckboxChange}
              />
              {type.name}
            </label>
          ))}
        </div>
        <button type='submit'>Create!</button>
      </form>

    </>
  )
}

export default PostPokemon
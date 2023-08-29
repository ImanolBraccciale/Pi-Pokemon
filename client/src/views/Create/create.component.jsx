import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postedPokemon } from "../../redux/actions/actions";
import validation from "../components/Validation/validation"
import "./create.css"
const PostPokemon = () => {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({});
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


  const handleSubmit = (event) => {
    event.preventDefault()

    if (!errors.name &&
      !errors.hp &&
      !errors.attack &&
      !errors.defense &&
      !errors.speed &&
      !errors.height &&
      !errors.weight &&
      !errors.sprites) {

      dispatch(postedPokemon(input))

      setInput({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: [],
        sprites: ''
      });
    }
  }


  const handleChange = (event) => {

    if (event.target.name === "name" || event.target.name === "sprites") {
      console.log(event.target.value);
      setInput({
        ...input,
        [event.target.name]: event.target.value

      })
    } else {
      console.log(Number(event.target.value));
      setInput({
        ...input,
        [event.target.name]: Number(event.target.value)
      })
    }
  }

  const handleBlur = () => {
    const newErrors = validation(input);
    setErrors(newErrors);
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


  return (
    < div className='container '  >
      <form className="form-container" onSubmit={e => { handleSubmit(e) }}>
        <div>

          <label className="form-label">Name</label>
          <input type='text' value={input.name} name='name' placeholder='name...' onChange={e => { handleChange(e) }} onBlur={handleBlur} className="form-input" />
          <p className="error-message">{errors.name}</p>

          <label className="form-label">Sprites</label>
          <input type="text" value={input.sprites} name='sprites' placeholder="sprites..." onChange={e => { handleChange(e) }} onBlur={handleBlur} className="form-input" />
          <p className="error-message">{errors.sprites}</p>

          <label className="form-label">Hp</label>
          <input type="number" value={input.hp} name='hp' placeholder="hp..." onChange={e => { handleChange(e) }} onBlur={handleBlur} className="form-input" />
          <p className="error-message">{errors.hp}</p>

          <label className="form-label">Attack</label>
          <input type="number" value={input.attack} name='attack' placeholder="attack..." onChange={e => { handleChange(e) }} onBlur={handleBlur} className="form-input" />
          <p className="error-message">{errors.attack}</p>

          <label className="form-label">Defense</label>
          <input type="number" value={input.defense} name='defense' placeholder="defense..." onChange={e => { handleChange(e) }} onBlur={handleBlur} className="form-input" />
          <p className="error-message">{errors.defense}</p>

          <label className="form-label">peed</label>
          <input type="number" value={input.speed} name='speed' placeholder="speed..." onChange={e => { handleChange(e) }} onBlur={handleBlur} className="form-input" />
          <p className="error-message">{errors.speed}</p>

          <label className="form-label">height</label>
          <input type="number" value={input.height} name='height' placeholder="height..." onChange={e => { handleChange(e) }} onBlur={handleBlur} className="form-input" />
          <p className="error-message">{errors.height}</p>

          <label className="form-label">weight</label>
          <input type="number" value={input.weight} name='weight' placeholder="weight..." onChange={e => { handleChange(e) }} onBlur={handleBlur} className="form-input" />
          <p className="error-message">{errors.weight}</p>

        </div>
        <div className="checkbox-container">
          {types?.map((type) => (
            <label className="checkbox-label" key={type.id}>
              <input
                type="checkbox"
                className="checkbox-input"
                value={type.id}
                checked={input.types.includes(type.id)}
                onChange={handleCheckboxChange}
              />
              {type.name}
            </label>
          ))}
        </div>
        <button type="submit" className="submit-button">Create!</button>
      </form>
    </div>
  )
}

export default PostPokemon
function Card({ pokemon }) {
  const { name, sprites, type1, type2 } = pokemon
  return (
    <div>
      <img img src={sprites} alt="Img not found" />
      <h2>{name}</h2>
      <p>{type1}</p>
      <p>{type2}</p>

    </div>
  )
}

export default Card
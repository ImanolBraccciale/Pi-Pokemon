function Card({ pokemon }) {

  const { name, sprites, types } = pokemon
  return (
    <div>
      <img src={sprites} alt="Img not found" />
      <h2>{name}</h2>
      <div>
        {
          types.map((type) =>
            <p key={type.id}>{type.name}</p>
          )
        }
      </div>


    </div>
  )
}

export default Card
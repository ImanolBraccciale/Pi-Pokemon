import { Link } from "react-router-dom"
import "./landing.css";

function landing() {
  return (
    <div className="landing">
      <span className='Creador'>Created By Imanol</span>
      <div className='pokelogo' alt="landing" />
      <Link to="/home">
        <button className='start'>Start</button>
      </Link>
    </div>
  )
}

export default landing
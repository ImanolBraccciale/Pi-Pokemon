import { Link } from "react-router-dom"
function landing(params) {
  return (
    <div className="landing">
      <p>Este es el landing</p>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  )
}

export default landing
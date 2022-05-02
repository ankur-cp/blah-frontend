
import MyAPI from "../api/MyAPI"
import { Link } from "react-router-dom"

function HomePage(props) {
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={ () => MyAPI.login() }>Login</button>
      <button onClick={ () => MyAPI.logout() }>Logout</button>
      <Link to="/post"><button>Post Page</button></Link>
    </div>
  )
}

export default HomePage;
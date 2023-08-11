import "./All.css";
import { Link } from "react-router-dom";
import { BiMenu, BiHome, BiHeart } from "react-icons/bi";

export default function Navbar(){
  return(
    <nav>
      <ul>
        <li>
          <Link to="#"><BiMenu /></Link>
        </li>
        <li>
          <Link to="/"><BiHome /></Link>
        </li>
        <li>
          <Link to="/wish"><BiHeart /></Link>
        </li>
      </ul>
    </nav>
  )
}
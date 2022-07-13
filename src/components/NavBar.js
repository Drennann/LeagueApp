import {NavLink} from "react-router-dom";
import "./NavBar.css"

export default function NavBar(){
    return(
    <ul className="NavBar">
        <li className="liText"><NavLink to="/" className="liText">LeagueApp</NavLink></li>
    </ul>)
}
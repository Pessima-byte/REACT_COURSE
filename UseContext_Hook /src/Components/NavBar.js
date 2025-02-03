
import {Link} from "react-router-dom";
import styles from "../App.module.css";

const NavBar = () => {
    return(
        <>
        <Link to="/" >TodoList</Link>
        <Link to="/Api_Fetch">Cat Fact</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        </>
    )
}

export default NavBar;
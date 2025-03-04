import { Link } from "react-router-dom";
import "./NavBar.scss";
function NavBar() {
    return (
        <nav className="nav">
            <Link to="/">Accueil</Link>
            <Link to="/a-propos">A Propos</Link>
        </nav>
    );
}
export default NavBar;
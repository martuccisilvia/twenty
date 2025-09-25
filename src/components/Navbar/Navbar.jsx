import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/contacts">Contatti</Link>
    </nav>
  );
}

export default Navbar;

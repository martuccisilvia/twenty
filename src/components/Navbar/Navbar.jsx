import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ searchTerm, setSearchTerm }) {

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>

      {/* Barra di ricerca */}
      <input
        type="text"
        placeholder="Search songs..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </nav>
  );
}

export default Navbar;

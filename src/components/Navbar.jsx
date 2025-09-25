import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/contacts">Contatti</Link>
    </nav>
  );
}

export default Navbar;

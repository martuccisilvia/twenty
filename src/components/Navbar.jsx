// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/vote">Vota Playlist</Link>
    </nav>
  );
}

export default Navbar;

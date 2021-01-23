import React from "react";
import { Link } from "react-router-dom";
import "./navPokedex.css";

function NavPokedex() {
  return (
    <li className="NavPokedex">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/bookmarked">Bookmarked</Link>
    </li>
  );
}

export default NavPokedex;

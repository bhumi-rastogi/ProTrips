import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="nav">
    <div className="navitem">
      <Link to="/" className="nav-link">Kalvium💖</Link>
    </div>
    <div className="recipe">
      <ul className="val">
        <NavItem to="/contacts" text="Contacts" className="ghar" />
        <NavItem to="/register" text="Register" className="abo" />
      </ul>
    </div>
  </nav>
);

const NavItem = ({ to, text, className }) => (
  <li className="navli">
    <Link to={to} className={`nav-link ${className || ""}`}>{text}</Link>
  </li>
);

export default Header ;
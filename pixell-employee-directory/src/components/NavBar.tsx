import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/employees">Employees</Link>
        <Link to="/organization">Organization</Link>
      </div>
      <div className="nav-logo">
        <img src="/logo.png" alt="Pixell River Financial Logo" />
      </div>
    </nav>
  );
};

export default NavBar;

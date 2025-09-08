import React from "react";
import "./NavBar.css"; // optional: your CSS for the nav

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#">Employees</a>
        <a href="#">Organization</a>
    </div>
      <div className="nav-logo">
        <img src="/logo.png" alt="Pixell River Financial Logo" />
      </div>
    </nav>
  );
};

export default NavBar;

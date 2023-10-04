import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="" className="logo" />
        <div className="navbar-menu">
          <div className="menu-item">
            <Link to="/">Home</Link>
          </div>
          <div className="menu-item">
            <Link>About</Link>
          </div>
          <div className="menu-item">
            <Link>Product</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "../images/JUPIT_Logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-box">
          <img src={logo} alt="logo" />
        </div>
        <div className="more-details">
          <ul className="more-details-list">
            <li className="more-details-item">About Us</li>
            <li className="more-details-item">Product</li>
            <li className="more-details-item">Resources</li>
            <li className="more-details-item">Contact</li>
          </ul>
        </div>
        <div className="cta">
          <a href="#signin" className="btn">
            Sign In
          </a>
          <a href="#contact" className="btn btn-primary">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

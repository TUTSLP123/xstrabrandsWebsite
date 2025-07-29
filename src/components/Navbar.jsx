import React, { useState } from "react";
import { NavLink } from "react-router-dom"; //  React Router for navigation
import "./Navbar.css";
import logo from "../pics/piclogo.png";
import { FaBars } from "react-icons/fa";
import "./homePicDescription.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            {/* Logo and text */}
            <div className="logo-wrapper">
              <img src={logo} alt="Xtrabrands Logo" />

              <div className="logo-text">
                XSTRA <span className="highlight-brand">BRANDS</span>
              </div>
            </div>

            {/* Navigation menu */}
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="icon" onClick={toggleMenu}>
              <FaBars />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;

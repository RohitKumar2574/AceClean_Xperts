import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Referencing the logo directly from the public folder */}
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="AceClean Xperts" />
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Use Link for routing */}
          </li>
          <li>
            <Link to="/services">Services</Link> {/* Link to Services page */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Link to About page */}
          </li>
          <li>
            <Link to="/contact">Contact Us</Link> {/* Link to Contact page */}
          </li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </header>
  );
};

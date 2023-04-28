import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleLinkClick = () => {
    setShowLinks(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="lego.png" alt="Lego Logo" />
      </div>
      <div className={`nav-links ${showLinks ? "show" : ""}`}>
        <a href="#projects" onClick={handleLinkClick}>
          Project
        </a>
        <a href="#about" onClick={handleLinkClick}>
          About
        </a>
        <a href="#contacts" onClick={handleLinkClick}>
          Contacts
        </a>
      </div>
      <div className="burger" onClick={toggleShowLinks}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;

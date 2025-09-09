import React from "react";
import "./Navbar.css";
import profilePic from "../assets/profile.jpg"; // apni image ka path yaha dalna

const Navbar = () => {
  return (
    <nav className="nav"> 
      <div className="container nav__row">

        {/* Left side: Image + Name */}
        <div className="nav__left">
          <img src={profilePic} alt="Yashwant Yadav" className="nav__brand-img" />
          <span className="nav__name">Yashwant Yadav</span>
        </div>

        {/* Right side: Navigation Links */}
        <ul className="nav__links">
          <li><a href="#hero" className="btn btn--sm">Home</a></li>
          <li><a href="#about" className="btn btn--sm">About</a></li>
          <li><a href="#skills" className="btn btn--sm">Skills</a></li>
          <li><a href="#projects" className="btn btn--sm">Projects</a></li>
          <li><a href="#certificate" className="btn btn--sm">Certificates</a></li> 
          <li><a href="#contact" className="btn btn--sm">Contact</a></li> 
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "../css/navbar.css";
import child from "./images/child.jpg";
function Navbar() {
  return (
    <div className="bg-img">
      <div className="header">
        <div className="name">
          <h1>martha</h1>
        </div>
        <nav>
          <ul className="Navbar-ul">
            <li className="Navbar-li">Home</li>
            <li className="Navbar-li">About</li>
            <li className="Navbar-li">Resume</li>
            <li className="Navbar-li">Project</li>
            <li className="Navbar-li">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="Overlay">
        <h5 className="Hello">HELLO!</h5>
        <h1 className="title">
          I'm <span className="inbetween">Martha Mandizvidza</span>
        </h1>
        <h2 className="nav-title">Front End Website Developer</h2>
        <button className="hire">HIRE ME</button>
        <button className="works">MY WORKS</button>
      </div>
    </div>
  );
}
export default Navbar;

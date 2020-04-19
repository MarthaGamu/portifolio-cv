import React from "react";
/*import "../css/navbar.css";*/
/*import child from "./images/child.jpg";*/
/*import laptop from "./images/child.jpg";*/
function Navbar() {
  return (
    <div className="bg-img">
      <div className="header">
        <div className="nameTag">
          <strong>Martha</strong>
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
      <div className="overlayContainer">
        <div className="Overlay">
          <div className="Overlay-Info">
            <h5 className="Welcome">Welcome!</h5>
            <h1 className="title">
              {" "}
              I'm <span className="name">Martha Mandizvidza</span>
            </h1>
            <h3 className="nav-title">Front End Developer</h3>
            <div className="buttonWrapper">
              <button className="hire">HIRE ME</button>
              <button className="works">MY WORKS</button>
            </div>
          </div>
          {/*<div className="Overlay-Image">
            <img src={laptop} alt="laptop" />
  </div>*/}
        </div>
      </div>
    </div>
  );
}
export default Navbar;

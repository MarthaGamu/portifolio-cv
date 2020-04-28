import React from "react";
/*import "../css/navbar.css";*/
import apple from "./images/apple.jpg";
import final from "./images/final.jpg";
import { Link } from "react-router-dom";

/*function Navbar() {
  return (
    <div>
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
      <div className="bg-img">
        <div className="overlayContainer">
          <div className="Overlay">
            <div className="Overlay-Info">
              <h4 className="Welcome">HELLO,MY NAME IS</h4>
              <h1 className="title">Martha Mandizvidza</h1>
              <h3 className="nav-title">Front End Developer</h3>

              <div className="buttonWrapper">
                <button className="works">MY WORKS</button>
              </div>
            </div>
            {/*<div className="Overlay-Image">
            <img src={laptop} alt="laptop" />
  </div>*
          </div>
        </div>
      </div>
    </div>
  );
}*/
function Navbar() {
  return (
    <div className="navbar-container" id="Home">
      {/*<img src={apple} alt="coding" />*/}
      <div className="topContainer">
        <div className="navContainer">
          <div className="header">
            <div className="nameTag">
              <strong>
                <a href="#Home">martha</a>
              </strong>
            </div>
            <nav>
              <ul className="Navbar-ul">
                <li className="Navbar-li active">
                  <a href="#Home">Home</a>
                </li>

                <li className="Navbar-li">
                  <a href="#About">About</a>
                </li>

                <li className="Navbar-li">
                  <a href="#Resume">Resume</a>
                </li>

                <li className="Navbar-li">
                  <a href="#Project">Project</a>
                </li>

                <li className="Navbar-li">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="centerItems">
            <div className="itemContainer">
              <div className="image">
                <img src={final} alt="final" />
              </div>
              <div className="itemWrapper">
                <h1 className="firstname">I'm Martha G Mandizvidza</h1>
                <p>
                  <span className="frontend">Frontend Developer.</span>
                </p>
                <button className="btnCV"> DOWNLOAD CV</button>
                <button className="hire">HIRE ME</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;

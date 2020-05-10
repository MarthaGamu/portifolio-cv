import React from "react";
/*import "../css/navbar.css";*/
import apple from "./images/apple.jpg";
import final from "./images/final.jpg";
import { Link } from "react-router-dom";

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
              <div className="imageContainer">
                <div className="image">
                  <img src={final} alt="final" />
                </div>
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

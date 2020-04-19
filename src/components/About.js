import React from "react";
/*import "../css/about.css";*/

function About() {
  return (
    <div className="aboutContainer">
      <h1 className="mainHeading">About Me</h1>
      <div className="about-skills">
        <div className="aboutWrapper">
          <div className="about_me">
            <div className="about-content">
              <p className="content">
                <h3 className="web">Web Developer!</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="social-links">
                <i class="fab  fa fa-facebook-f"></i>
                <i class="fab  fa fa-github"></i>
                <i class="fab fa fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="myskills">
          <div className="skill-container">
            <h3>HTML5 & CSS3</h3>
            <li>
              <span className="bar">
                <span className="html"></span>
              </span>
            </li>

            <h3>JAVASRIPT</h3>
            <li>
              <span className="bar">
                <span className="javascript"></span>
              </span>
            </li>
            <h3>REACT JS</h3>
            <li>
              <span className="bar">
                <span className="react"></span>
              </span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;

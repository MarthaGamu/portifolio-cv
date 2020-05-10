import React from "react";

/*import "../css/about.css";*/

function About() {
  return (
    <div
      className="aboutContainer"
      id="About"
      data-aos="slide-up"
      data-aos-duration="1"
    >
      <h1 className="mainHeading">ABOUT ME</h1>
      <div className="horizontal-line">
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
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
                <a
                  href="https://www.facebook.com/marthag.mandizvidza/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab  fa fa-facebook-f"></i>
                </a>
                <a
                  href="https://github.com/MarthaGamu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i class="fab  fa fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/martha-g-mandizvidza-131956131/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa fa-linkedin"></i>
                </a>
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

            <h3>JAVASCRIPT</h3>
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

import React from "react";
/*import "../css/about.css";*/

function About() {
  return (
    <div className="aboutWrapper">
      <h1 className="mainHeading">About Me</h1>
      <div className="about_me">
        <div className="about-content">
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="social-links">
            <i class="fab  fa fa-facebook-f"></i>
            <i class="fab fa fa-github"></i>
            <i class="far fa fa-envelope"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;

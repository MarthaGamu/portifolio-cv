import React from "react";

import one from "./images/fruits.jpg";
import two from "./images/online.jpg";
import three from "./images/hotell.jpg";
import four from "./images/restaurant.jpg";
/*import "../css/project.css";*/
const Projects = ({ projects }) => {
  return (
    <div className="project-container" id="Project">
      <div className="projects">
        <h1 className="mainHeading">MY PROJECTS</h1>
        <div className="horizontal-line">
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
        <div className="imgWrapper">
          <div className="first">
            <img src={one} alt="first project" />
            <h3 className="projectHeading">Grocery Website</h3>
          </div>
          <div className="second">
            <img src={two} alt="second project" />
            <div>
              <h3 className="projectHeading">Ecommerce Website</h3>
            </div>
          </div>

          <div className="third">
            <img src={three} alt="third" />
            <div>
              {" "}
              <h3 className="projectHeading">Hotel Website</h3>
            </div>
          </div>
          <div className="fourth">
            <img src={four} alt="fourth" />
            <div>
              {" "}
              <h3 className="projectHeading">Restaurant Website</h3>
            </div>
          </div>
          {/*  <div className="ProjectWrapper">
          {projects.map((project) => (
            <div className="cardProject">
              <ul>
                <li className="cards">
                  <img src={project.img} alt="My projects" className="img" />
                </li>
              </ul>
            </div>
          ))}*/}
        </div>
      </div>
    </div>
  );
};
export default Projects;

import React from "react";
import projectImg from "./images/projectImg.jpg";
import projectImg2 from "./images/projectImg2.jpg";

function Projects() {
  return (
    <div className="projects">
      <h1 style={{ color: "white", textAlign: "center" }}>Projects</h1>
      <div className="ProjectWrapper">
        <div className="cardProject">
          <img src={projectImg} alt="My projects" />
        </div>
        <div className="cardProject">
          <img src={projectImg2} alt="My projects" />
        </div>
        <div className="cardProject">
          <img src={projectImg} alt="My projects" />
        </div>
      </div>
    </div>
  );
}
export default Projects;

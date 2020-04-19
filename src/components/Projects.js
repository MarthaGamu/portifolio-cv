import React from "react";
/*import "../css/project.css";*/
const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <h1 className="mainHeading">Projects</h1>
      <p>This are my Projects.I designed myself</p>
      <div className="ProjectWrapper">
        {projects.map((project) => (
          <div className="cardProject">
            <img src={project.img} alt="My projects" />

            <div className="project-text">
              <h4 style={{ color: "#f0b236" }}>{project.heading}</h4>
              <p>{project.information}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;

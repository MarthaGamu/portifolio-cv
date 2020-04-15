import React from "react";
/*import "../css/project.css";*/
const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <h1 className="mainHeading">Projects</h1>
      <div className="ProjectWrapper">
        {projects.map((project) => (
          <div className="cardProject">
            <img src={project.img} alt="My projects" />
            <p>{project.information}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;

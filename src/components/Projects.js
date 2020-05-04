import React, { useState } from "react";
import skills from "../DataLayer/skills";

export default function Projects() {
  const [state] = useState(skills);
  const { projects } = state;

  return (
    <div className="projectContainer" id="Project">
      <div className="projects">
        <h1 className="mainHeading">MY PROJECTS</h1>
        <div className="horizontal-line">
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div>
      <div className="ProjectWrapper">
        {projects.map((project) => (
          <div className="cardProjects">
            <div className="innerProject">
              <ul>
                <li className="cards">
                  <img src={project.img} alt="My projects" className="img" />
                  <span className="projectHeading">{project.heading}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

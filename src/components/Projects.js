import React, { useState } from "react";
import skills from "../DataLayer/skills";

export default function Projects() {
  const [state] = useState(skills);
  const { projects } = state;

  return (
    <div
      className="projectContainer"
      id="Project"
      data-aos="slide-up"
      data-aos-duration="1"
    >
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
                  <div className="img">
                    <img src={project.img} alt="My projects" />
                  </div>
                  <div className="Content">
                    <h1 className="projectHeading">
                      <strong>{project.heading}</strong>
                    </h1>
                    <p className="projectHeading">
                      Hello africa .How are the animals
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import ResumeCard from "./ResumeCard";
import skills from "../DataLayer/skills";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
/*import "../css/resume.css";*/

const Resume = (props) => {
  const [state] = useState(skills);
  const { experiences, projects } = state;

  if (experiences.length === 0) {
    return <h1 className="mainHeading">No data</h1>;
  }

  return (
    <div>
      <div className="Resume" id="Resume">
        <div className="resume-content">
          <h1 className="mainHeading">MY RESUME</h1>
          <div className="horizontal-line">
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
        </div>
        <div className="resumeWrapper">
          {experiences.length > 0 &&
            experiences.map((experience) => (
              <ResumeCard key={experience.header} {...experience} />
            ))}
        </div>
        {/*<div className="downloadBtn">
        <button className="download">DOWNLOAD CV</button>
          </div>*/}

        <Projects projects={projects} />

        <Contact />
      </div>
    </div>
  );
};
export default Resume;

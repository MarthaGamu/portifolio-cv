import React, { useState } from "react";
import ResumeCard from "./ResumeCard";
import skills from "../DataLayer/skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Banner from "./Banner";
/*import "../css/resume.css";*/

const Resume = (props) => {
  const [state] = useState(skills);
  const { experiences, projects } = state;

  if (experiences.length === 0) {
    return <h1 className="mainHeading">No data</h1>;
  }

  return (
    <div className="Resume">
      <div className="resume-content">
        <h1 className="mainHeading">Resume</h1>
        <p className="Paragraph">
          A small river named Duden flows by their place and supplies it with.
        </p>
      </div>
      <div className="resumeWrapper">
        {experiences.length > 0 &&
          experiences.map((experience) => (
            <ResumeCard key={experience.header} {...experience} />
          ))}
      </div>
      <div className="downloadBtn">
        <button className="download">DOWNLOAD CV</button>
      </div>

      <Projects projects={projects} />

      <Contact />
    </div>
  );
};
export default Resume;

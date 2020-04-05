import React, { useState } from "react";
import ResumeCard from "./ResumeCard";
import skills from "../DataLayer/skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "../css/resume.css";

const Resume = (props) => {
  const [state] = useState(skills);
  const { experiences, projects } = state;

  if (experiences.length === 0) {
    return <h1 className="mainHeading">No data</h1>;
  }

  return (
    <div className="Resume">
      <h1 className="mainHeading">Resume</h1>
      <p>
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a paradisematic country, in which roasted
        parts of sentences fly into your mouth.
      </p>

      <div className="resumeWrapper">
        {experiences.length > 0 &&
          experiences.map((experience) => (
            <ResumeCard key={experience.header} {...experience} />
          ))}
      </div>
      <button className="Contact-Submit">DOWNLOAD CV</button>

      <Projects projects={projects} />

      <Contact />
    </div>
  );
};
export default Resume;

import React from "react";

function ProjectCard({ img, title, information, link }) {
  return (
    <div className="cardProject">
      <img src={img} alt="My projects" />
      <h5>{title}</h5>
    </div>
  );
}

export default ProjectCard;

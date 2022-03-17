import React from "react";
import "./ProjectCard.css";

const ProjectBigCard = (props) => (
  <div className="project__content">
    <img src={props.image} alt={props.title} className="project__img" />
    <div className="project__data">
      <h1 className="project__title">{props.title}</h1>
      <p className="project__description">{props.description}...</p>
      <h3>Powerd By</h3>
      <div className="project__languages">{props.tags}</div>
      <div className="project__links">
        <a href={props.github} className="button">
          <i className="uil uil-github project__link" />
          Github
        </a>
        <a href={props.website} className="button">
          <i className="uil uil-globe project__link" />
          Website
        </a>
      </div>
    </div>
  </div>
);

export default ProjectBigCard;

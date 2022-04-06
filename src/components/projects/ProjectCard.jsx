import React from "react";
import "./ProjectCard.css";
import StyledParagraph from "./../../styles/StyledParagrapgh";
import StyledLinedTitle from "./../../styles/StyledLinedTitle";

const ProjectBigCard = (props) => (
  <div className="project__content">
    <img src={props.image} alt={props.title} className="project__img" />
    <div className="project__data">
      <StyledLinedTitle>{props.title}</StyledLinedTitle>
      <StyledParagraph className="project__description">
        {props.description}...
      </StyledParagraph>
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

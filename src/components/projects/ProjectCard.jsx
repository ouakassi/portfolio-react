import React from "react";
import "./ProjectCard.css";
import StyledParagraph from "./../../styles/StyledParagrapgh";
import StyledLinedTitle from "./../../styles/StyledLinedTitle";
import ButtonPrimary from "../../styles/Buttons/ButtonPrimary";

const ProjectBigCard = (props) => (
  <div className="project__content">
    <div className="project__img">
      <img src={props.image} alt={props.title} />
    </div>
    <div className="project__data">
      <StyledLinedTitle>{props.title}</StyledLinedTitle>
      <StyledParagraph className="project__description">
        {props.description}...
      </StyledParagraph>
      <div className="project__languages">{props.tags}</div>
      <div className="project__links">
        <ButtonPrimary
          title="Github"
          icon="uil uil-github"
          link="https://www.google.com"
        />
        <ButtonPrimary
          title="Website"
          icon="uil uil-globe"
          link="https://www.google.com"
        />
      </div>
    </div>
  </div>
);

export default ProjectBigCard;

import React, { useState, useEffect, useRef } from "react";
import "./ProjectCard.css";
import StyledParagraph from "./../../styles/StyledParagrapgh";
import StyledLinedTitle from "./../../styles/StyledLinedTitle";
import ButtonPrimary from "../../styles/Buttons/ButtonPrimary";

import { motion } from "framer-motion";

const ProjectBigCard = (props) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0.1 }}
      whileInView={{ y: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="project__content"
    >
      <div className="project__img">
        <img src={props.image} alt={props.title} />
      </div>
      <motion.div className="project__data">
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
      </motion.div>
    </motion.div>
  );
};

export default ProjectBigCard;

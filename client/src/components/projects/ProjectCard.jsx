import React, { useState, useEffect, useRef } from "react";
import "./ProjectCard.css";
import StyledParagraph from "./../../components/StyledParagrapgh";
import StyledLinedTitle from "./../../components/StyledLinedTitle";
import ButtonPrimary from "../Buttons/ButtonPrimary";

import { motion } from "framer-motion";

const ProjectBigCard = (props) => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0.3 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
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

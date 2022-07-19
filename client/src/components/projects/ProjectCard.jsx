import "./ProjectCard.css";
import StyledParagraph from "./../../components/StyledParagrapgh";
import StyledLinedTitle from "./../../components/StyledLinedTitle";
import ButtonPrimary from "../Buttons/ButtonPrimary";

import { motion } from "framer-motion";

const ProjectCard = ({ image, title, description, tags }) => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", mass: 0.5 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, amount: 0.4 }}
      className="project__box"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: 1 }}
        viewport={{ once: true, amount: 1 }}
        className="project__img"
      >
        <img src={image} alt={title} />
      </motion.div>
      <motion.div className="project__data">
        <StyledLinedTitle>{title}</StyledLinedTitle>
        <StyledParagraph className="project__description">
          {description}...
        </StyledParagraph>
        <div className="project__languages">{tags}</div>
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

export default ProjectCard;

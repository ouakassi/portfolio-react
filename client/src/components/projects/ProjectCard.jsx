import "./ProjectCard.css";
import StyledParagraph from "./../../components/StyledParagrapgh";
import StyledLinedTitle from "./../../components/StyledLinedTitle";
import ButtonPrimary from "../Buttons/ButtonPrimary";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const patternBackground = "./images/pattern2.png";

const ProjectCard = ({ image, title, description, tags, link }) => {
  const cardAnimation = {
    initial: {
      y: 90,
      opacity: 0,
      scale: 1,
      backgroundPositionY: "50%",
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.5 },
    },
    whileHover: { scale: 1.02, backgroundPositionY: "100%" },
  };

  return (
    <motion.div
      variants={cardAnimation}
      initial="initial"
      whileInView="whileInView"
      whileHover="whileHover"
      transition={{ type: "spring", mass: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className="project__box"
      style={{
        backgroundImage: `url(${patternBackground}) , radial-gradient(rgba(0, 19, 80, 0.5), rgb(5, 3, 49))`,
      }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.2, transition: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 1 }}
        className="project__img"
      >
        <img src={image} alt={title} />
      </motion.div>
      <div className="project__data">
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
          <Link to={link}>Details</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

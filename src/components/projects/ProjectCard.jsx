import "./ProjectCard.css";
import StyledParagraph from "./../../components/StyledParagrapgh";
import StyledLinedTitle from "./../../components/StyledLinedTitle";
import ButtonPrimary from "../Buttons/ButtonPrimary";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import IMAGES from "../../images";
import { useLayoutEffect, useRef } from "react";

const patternBackground = IMAGES.patternTwo;

const ProjectCard = ({ image, title, description, tags, link }) => {
  const cardRef = useRef();

  useLayoutEffect(() => {
    const cardElement = cardRef.current;

    const handleMouseOver = (e) => {
      // get mouse position
      const x = e.clientX;
      const y = e.clientY;

      // find the middle
      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;

      // get offset from middle as a percentage
      // and tone it down a little
      const offsetX = ((x - middleX) / middleX) * 15;
      const offsetY = ((y - middleY) / middleY) * 15;

      // set rotation
      cardElement.style.setProperty("--rotateX", -1 * offsetX + "deg");
      cardElement.style.setProperty("--rotateY", 1 * offsetY + "deg");

      cardElement.style.setProperty("--positionX", 1 * 1.5 * offsetX + "%");
      cardElement.style.setProperty("--positionY", -1 * 1.5 * offsetX + "%");
    };
    const handleMouseLeave = () => {
      // set rotation to default when not hovering
      cardElement.style.setProperty("--rotateX", 0 + "deg");
      cardElement.style.setProperty("--rotateY", 0 + "deg");
    };

    if (cardElement) {
      cardElement.addEventListener("mousemove", handleMouseOver);
      cardElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener("mousemove", handleMouseOver);
      }
    };
  }, []);

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
    <div
      ref={cardRef}
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
    </div>
  );
};

export default ProjectCard;

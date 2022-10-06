import "./ExperienceBox.css";
import StyledParagraph from "./../StyledParagrapgh";
import GlowingText from "../GlowingText";
import { motion } from "framer-motion";

export default function ExperienceBox({
  company,
  companyImg,
  position,
  date,
  desc,
}) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.5,
          type: "spring",
          stiffness: 30,
          mass: 1,
        },
      }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
      className="exp__box"
    >
      <div className="exp__data">
        <div className="exp__head">
          <img src={companyImg} alt={company} />
          <div className="exp__heading">
            <h3 className="exp__heading-name">{company}</h3>
            <GlowingText
              text={position}
              textTransform="capitalize"
              fs="1.6rem"
              color="var(--first-color-alt)"
            />
          </div>
        </div>

        <span className="exp__date">{date}</span>
      </div>
      <StyledParagraph
        style={{
          color: "var(--text-color)",
          fontFamily: " var(--font-1)",
        }}
      >
        {desc}
      </StyledParagraph>
    </motion.div>
  );
}

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
    <div className="exp__box">
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
    </div>
  );
}

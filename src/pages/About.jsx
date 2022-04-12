import React from "react";
import "../components/about/AboutStyle.css";
import Section from "../styles/Section";
import { stackLangs } from "../data/db.js";
import checkColor from "../components/projects/checkColor";
import StyledParagraph from "../styles/StyledParagrapgh";

export default function About() {
  return (
    <Section
      className="about"
      id="about"
      icon="uil uil-files-landscapes-alt"
      sectionTitle="About me"
      sectionSubtitle="recent articles"
    >
      <div className="about__container container">
        <div className="about__stack__container">
          <div className="about__stack__languages">
            {stackLangs.map((lang, i) => {
              return checkColor(lang, i, "about__stack__languages-lang");
            })}
          </div>
          <div className="about__stack__paragraphs">
            <StyledParagraph>
              Over 3 years of professional exposure in JavaScript technology
              such as Node JS , Express.js ,React JS, D3 JS, MongoDB and .
            </StyledParagraph>
            <StyledParagraph>
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and Ui / Ux design, delivering quality
              work.
            </StyledParagraph>
            <StyledParagraph>
              Expertise in developing web pages using HTML5, CSS3, MVC, SASS,
              LESS, Object Oriented Java script, ES6, JQuery, AJAX, JSON, XML.
              Good understanding of Document Object Model (DOM) and DOM
              Functions.
            </StyledParagraph>
          </div>
        </div>
      </div>
    </Section>
  );
}

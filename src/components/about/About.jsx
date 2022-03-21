import React from "react";
import "./AboutStyle.css";
import Section from "../../styles/Section";
import { stackLangs } from "./../../data/Data.js";
import checkColor from "../projects/checkColor";
import StyledParagraph from "./../../styles/StyledParagrapgh";

const About = () => (
  <>
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

    <section className="qualification section">
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex qualification__active"
            data-target="#education"
          >
            <i className="uil uil-graduation-cap qualification__icon" />
            Education
          </div>
          <div
            className="qualification__button button--flex"
            data-target="#work"
          >
            <i className="uil uil-briefcase-alt qualification__icon" />
            Work
          </div>
        </div>
        <div className="qualification__sections">
          {/*==================== QUALIFICATION CONTENT 1 ====================*/}
          <div
            className="qualification__content qualification__active"
            data-content
            id="education"
          >
            {/*==================== QUALIFICATION  1 ====================*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Enginner</h3>
                <span className="qualification__subtitle">
                  Moroccan Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2016-2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>
            {/*==================== QUALIFICATION  2 ====================*/}
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  Morocco - Vfs Global
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2018-Today
                </div>
              </div>
            </div>
            {/*==================== QUALIFICATION  3 ====================*/}
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div>
                <h3 className="qualification__title">Web Devele</h3>
                <span className="qualification__subtitle">
                  Moroceffezfs College
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2016-2018
                </div>
              </div>
            </div>
            {/*==================== QUALIFICATION  4 ====================*/}
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder" />
                {/* <span class="qualification__line"></span> */}
              </div>
              <div>
                <h3 className="qualification__title">Web Devel</h3>
                <span className="qualification__subtitle">
                  Moroceffezfs College
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2016-2018
                </div>
              </div>
            </div>
          </div>
          {/*==================== QUALIFICATION CONTENT 2 ====================*/}
          <div className="qualification__content" data-content id="work">
            {/*==================== QUALIFICATION  1 ====================*/}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Enginner</h3>
                <span className="qualification__subtitle">Apple - USA</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2018-2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>
            {/*==================== QUALIFICATION  2 ====================*/}
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">
                  Morocco - Vfs Global
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2019-2021
                </div>
              </div>
            </div>
            {/*==================== QUALIFICATION  3 ====================*/}
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder" />
                {/* <span class="qualification__line"></span> */}
              </div>
              <div>
                <h3 className="qualification__title">Web Develesf</h3>
                <span className="qualification__subtitle">
                  Moroceffezfs College
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" />
                  2016-2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;

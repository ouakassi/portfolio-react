import React from "react";
import "./AboutStyle.css";
import SectionTitle from "../../styles/SectionTitle";

const About = () => (
  <>
    <section className="about section" id="about">
      <SectionTitle
        icon="uil uil-files-landscapes-alt"
        sectionTitle="About me"
        sectionSubtitle="recent articles"
      />

      <div className="about__container container">
        <div className="about__stats__container">
          <div className="about__stats__items">
            <div className="about__stats__data">
              <span>3</span>
              <span>years Experience</span>
              <i className="uil uil-medal about__stats__icon" />
            </div>
          </div>
          <div className="about__stats__items">
            <div className="about__stats__data">
              <span>8+</span>
              <span>Projects Completed</span>
              <i className="uil uil-building about__stats__icon" />
            </div>
          </div>
          <div className="about__stats__items">
            <div className="about__stats__data">
              <span>24/7</span>
              <span>Support Online </span>
              <i className="uil uil-user-arrows about__stats__icon" />
            </div>
          </div>
        </div>
        <div className="about__stack__container">
          <div className="about__stack__languages">
            <img src="./assets/img/languages/html.svg" alt="HTML" />
            <img src="./assets/img/languages/css.svg" alt="CSS" />
            <img src="./assets/img/languages/js.svg" alt="JavaScript" />
            <img src="./assets/img/languages/node.svg" alt="Node Js" />
            <img src="./assets/img/languages/react.svg" alt="React Js" />
            <img src="./assets/img/languages/next.svg" alt="Next Js" />
            <img src="./assets/img/languages/ts.svg" alt="TypeScript" />
          </div>
          <div className="about__stack__paragraphs">
            <p>
              Over 3 years of professional exposure in JavaScript technology
              such as Node JS , Express.js ,React JS, D3 JS, MongoDB and .
            </p>
            <p>
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and Ui / Ux design, delivering quality
              work.
            </p>
            <p>
              Expertise in developing web pages using HTML5, CSS3, MVC, SASS,
              LESS, Object Oriented Java script, ES6, JQuery, AJAX, JSON, XML.
              Good understanding of Document Object Model (DOM) and DOM
              Functions.
            </p>
          </div>
        </div>
      </div>
    </section>

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

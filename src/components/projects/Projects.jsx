import React from "react";
import "./ProjectsStyles.css";
import Section from "../../styles/Section";

const Projects = () => (
  <>
    <Section
      className="projects"
      id="projects"
      sectionTitle="Projects"
      sectionSubtitle="ffdsf"
    />

    <div className="project__container">
      {/*==================== PROJECTS Content 1 BIG ====================*/}
      <div className="project__content">
        <img
          src="./images/portfolio1.jpg"
          alt="portfolio1"
          className="project__img"
        />
        <div className="project__data">
          <h1 className="project__title">Resumaaaaaaaaaaaaaa</h1>
          <p className="project__description">
            Simple e-commerce application built using Angular, NestJS and
            MongoDB. it can give you all what you want.
          </p>
          <h3>Powerd By</h3>
          <div className="project__languages">
            <img src="./assets/img/languages/html.svg" />
            <img src="./assets/img/languages/css.svg" />
            <img src="./assets/img/languages/js.svg" />
            <img src="./assets/img/languages/node.svg" />
            <img src="./assets/img/languages/react.svg" />
          </div>
          <div className="project__links">
            <a href="#contact" className="button">
              <i className="uil uil-github project__link" />
              Github
            </a>
            <a href="#contact" className="button">
              <i className="uil uil-globe project__link" />
              Website
            </a>
          </div>
        </div>
      </div>
      {/*==================== PROJECTS Content 1 ====================*/}
      <div className="project__content">
        <img
          src="./assets/img/portfolio1.jpg"
          alt="portfolio1"
          className="project__img"
        />
        <div className="project__data">
          <h1 className="project__title">Resuma</h1>
          <p className="project__description">
            Simple e-commerce application built using Angular, NestJS and
            MongoDB. it can give you all what you want.
          </p>
          <h3>Powerd By</h3>
          <div className="project__languages">
            <img src="./assets/img/languages/html.svg" />
            <img src="./assets/img/languages/css.svg" />
            <img src="./assets/img/languages/js.svg" />
            <img src="./assets/img/languages/node.svg" />
            <img src="./assets/img/languages/react.svg" />
          </div>
          <div className="project__links">
            <a href="#contact" className="button">
              <i className="uil uil-github project__link" />
              Github
            </a>
            <a href="#contact" className="button">
              <i className="uil uil-server project__link" />
              Website
            </a>
          </div>
        </div>
      </div>
      {/*==================== PROJECTS Content 2 ====================*/}
      <div className="project__content">
        <img
          src="./assets/img/portfolio1.jpg"
          alt="portfolio1"
          className="project__img"
        />
        <div className="project__data">
          <h1 className="project__title">Resuma</h1>
          <p className="project__description">
            Simple e-commerce application built using Angular, NestJS and
            MongoDB. it can give you all what you want.
          </p>
          <h3>Powerd By</h3>
          <div className="project__languages">
            <img src="./assets/img/languages/html.svg" />
            <img src="./assets/img/languages/css.svg" />
            <img src="./assets/img/languages/js.svg" />
            <img src="./assets/img/languages/node.svg" />
            <img src="./assets/img/languages/react.svg" />
          </div>
          <div className="project__links">
            <a href="#contact" className="button">
              <i className="uil uil-github project__link" />
              Github
            </a>
            <a href="#contact" className="button">
              <i className="uil uil-server project__link" />
              Website
            </a>
          </div>
        </div>
      </div>
      {/*==================== PROJECTS Content 3 ====================*/}
      <div className="project__content">
        <img
          src="./assets/img/portfolio1.jpg"
          alt="portfolio1"
          className="project__img"
        />
        <div className="project__data">
          <h1 className="project__title">Resuma</h1>
          <p className="project__description">
            Simple e-commerce application built using Angular, NestJS and
            MongoDB. it can give you all what you want.
          </p>
          <h3>Powerd By</h3>
          <div className="project__languages">
            <img src="./assets/img/languages/html.svg" />
            <img src="./assets/img/languages/css.svg" />
            <img src="./assets/img/languages/js.svg" />
            <img src="./assets/img/languages/node.svg" />
            <img src="./assets/img/languages/react.svg" />
          </div>
          <div className="project__links">
            <a href="#contact" className="button">
              <i className="uil uil-github project__link" />
              Github
            </a>
            <a href="#contact" className="button">
              <i className="uil uil-server project__link" />
              Website
            </a>
          </div>
        </div>
      </div>
      {/*==================== PROJECTS Content 4 ====================*/}
      <div className="project__content">
        <img
          src="./assets/img/portfolio1.jpg"
          alt="portfolio1"
          className="project__img"
        />
        <div className="project__data">
          <h1 className="project__title">Resuma</h1>
          <p className="project__description">
            Simple e-commerce application built using Angular, NestJS and
            MongoDB. it can give you all what you want.
          </p>
          <h3>Powerd By</h3>
          <div className="project__languages">
            <img src="../../../public/images/img/languages/html.svg" />
            <img src="../../../public/images/img/languages/css.svg" />
            <img src="../../../public/images/img/languages/js.svg" />
            <img src="../../../public/images/img/languages/node.svg" />
            <img src="../../../public/images/img/languages/react.svg" />
          </div>
          <div className="project__links">
            <a href="#contact" className="button">
              <i className="uil uil-github project__link" />
              Github
            </a>
            <a href="#contact" className="button">
              <i className="uil uil-server project__link" />
              Website
            </a>
          </div>
        </div>
        {/*====================  ==============================*/}
      </div>
    </div>
    <a href="#" className="show-more__button">
      Show More <i className="uil uil-direction button__icon" />
    </a>
  </>
);

export default Projects;

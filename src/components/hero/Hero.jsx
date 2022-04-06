import React from "react";

import "./HeroStyle.css";
import SocialLink from "./SocialLink";

const Hero = () => (
  <section className="home section" id="home">
    <div className="home__container container ">
      <div className="home__content ">
        <div className="home__social">
          <SocialLink
            link="https://www.linkedin.com/in/oussama-ouakassi-28372216a/"
            icon="uil uil-linkedin-alt"
          />
          <SocialLink
            link="https://github.com/ouakassi"
            icon="uil uil-github-alt"
          />
          <SocialLink
            link="https://twitter.com/OuakassiOussama"
            icon="uil uil-twitter"
          />
        </div>

        <div className="home__data">
          <h1 className="home__title">
            <span className="home__title-first">Oussama</span>
            <span className="home__title-last">Ouakassi</span>
          </h1>
          <h3 className="home__subtitle">MERN Stack Developer</h3>
          <p className="home__description">
            An avid MERN stack developer, building websites that you would love
            using. I develop a Complete Responsive Websites using MERN
            technologies : MongoDB, React, NodeJS , Express. I've helped
            companies to launch production web applications to their customers.
            I love programming , creating, launching, learning, and Gaming.
          </p>
          <a href="#contact" className="button button--flex">
            Let's Talk <i className="uil uil-message button__icon" />
          </a>
        </div>
        <div className="home__img__container">
          <img
            src="./images/my-image.webp"
            alt="me"
            className="home__img__container-img"
          />
          <div className="home__img__container-dots"></div>
        </div>
        <div className="home__scroll">
          <a href="#projects" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse" />
            <span className="home__scroll-name">My Projects ?</span>
            <i className="uil uil-angle-double-down home__scroll-arrow" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

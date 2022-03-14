import React from "react";
import "./FooterStyle.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__bg">
      <div className="footer__container container grid">
        <div>
          <h1 className="footer__title">LOGO</h1>
          <span className="footer__subtitle">Mern Developer</span>
        </div>
        <ul className="footer__links">
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/oussama-ouakassi-28372216a/"
            target="_blank"
            className="footer__social"
          >
            <i className="uil uil-linkedin" />
          </a>
          <a
            href="https://github.com/ouakassi"
            target="_blank"
            className="footer__social"
          >
            <i className="uil uil-github" />
          </a>
          <a
            href="https://www.facebook.com/lmoutchoo/"
            target="_blank"
            className="footer__social"
          >
            <i className="uil uil-facebook" />
          </a>
          <a
            href="https://twitter.com/OuakassiOussama"
            target="_blank"
            className="footer__social"
          >
            <i className="uil uil-twitter" />
          </a>
          <a
            href="https://www.instagram.com/ouakassi07/"
            target="_blank"
            className="footer__social"
          >
            <i className="uil uil-instagram-alt" />
          </a>
        </div>
      </div>
      <p className="footer__copy">© Ouakassi. All right reserved</p>
    </div>
  </footer>
);

export default Footer;

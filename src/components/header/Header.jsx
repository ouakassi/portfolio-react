import React from "react";
import "./HeaderStyle.css";

const Header = () => (
  <header className="header" id="header">
    <nav className="nav container">
      <a href="#logo" className="nav__logo">
        O
      </a>
      <div className="nav__menu" id="#nav-menu">
        <ul className="nav__list grid">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              <i className="uil uil-estate nav__icon" />
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">
              <i className="uil uil-scenery nav__icon" />
              Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              <i className="uil uil-user nav__icon" />
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#blog" className="nav__link">
              <i className="uil uil-file-alt nav__icon" />
              Blog
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <i className="uil uil-message nav__icon" />
              Contact-Me
            </a>
          </li>
        </ul>
        <i className="uil uil-times nav__close" id="#nav-close" />
      </div>
      <div className="nav__btns">
        <div className="nav__toggle" id="#nav-toggle">
          <i className="uil uil-slack" />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;

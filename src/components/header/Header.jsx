import React from "react";
import "./HeaderStyle.css";
import NavItem from "./NavItem";

const Header = () => (
  <header className="header" id="header">
    <nav className="nav container">
      <a href="#logo" className="nav__logo">
        OUAKASSI
      </a>
      <div className="nav__menu" id="#nav-menu">
        <ul className="nav__list grid">
          <NavItem name="home" />
          <NavItem name="projects" />
          <NavItem name="about" />
          <NavItem name="blog" />
          <NavItem name="contact" />
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

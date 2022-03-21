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
          <NavItem name="home" icon="uil uil-estate" />
          <NavItem name="projects" icon="uil uil-folder-open" />
          <NavItem name="about" icon="uil uil-user-square" />
          <NavItem name="blog" icon="uil uil-files-landscapes-alt" />
          <NavItem name="contact" icon="uil uil-calling" />
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

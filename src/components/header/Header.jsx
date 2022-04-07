import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./HeaderStyle.css";
import NavItem from "./NavItem";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleClick = (state) => {
    setToggleNav(state);
  };

  console.log(handleClick);

  return (
    <header className="header" id="header">
      <nav className="nav">
        <NavLink to="/" className="nav__logo">
          OUAKASSI
        </NavLink>
        <div
          // show the navbar
          className={`nav__menu ${toggleNav ? "show-menu " : "hide-nav"}`}
          id="#nav-menu"
        >
          <ul className="nav__list grid">
            <NavItem
              name="home"
              icon="uil uil-estate"
              handleClick={handleClick}
            />

            <NavItem
              name="projects"
              icon="uil uil-folder-open"
              handleClick={handleClick}
            />

            <NavItem
              name="about"
              icon="uil uil-user-square"
              handleClick={handleClick}
            />

            <NavItem
              name="blog"
              icon="uil uil-files-landscapes-alt"
              handleClick={handleClick}
            />

            <NavItem
              name="contact"
              icon="uil uil-calling"
              handleClick={handleClick}
            />
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => handleClick(false)}
          />
        </div>
        <div className="nav__btns">
          <div className="nav__toggle" onClick={() => handleClick(true)}>
            <i className="uil uil-slack" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

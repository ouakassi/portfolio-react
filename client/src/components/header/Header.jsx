import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import "./HeaderStyle.css";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  // const [windowHeight, setwindowHeight] = useState(0);

  const handleClick = (state) => {
    setToggleNav(state);
  };

  return (
    <header className="header" id="header">
      <nav className="nav">
        <Link to="/" className="nav__logo">
          OUAKASSI
        </Link>
        <div
          // show the navbar
          className={`nav__menu ${toggleNav ? "show-menu " : "hide-nav"}`}
          id="#nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <NavLink
                onClick={() => handleClick(false)}
                to="/"
                className="nav__link"
              >
                <i className="uil uil-estate nav__icon" />
                <span>home</span>
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                onClick={() => handleClick(false)}
                to="/projects"
                className="nav__link"
              >
                <i className="uil uil-folder-open nav__icon" />
                <span>projects</span>
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                className="nav__link"
                onClick={() => handleClick(false)}
                to="/blog"
              >
                <i className="uil uil-files-landscapes-alt nav__icon" />
                <span>blog</span>
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                onClick={() => handleClick(false)}
                to="/about"
                className="nav__link"
              >
                <i className="uil uil-user-square nav__icon" />
                <span>about</span>
              </NavLink>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => handleClick(false)}
          />
        </div>
        <div className="nav__btns">
          <div className="nav__toggle" onClick={() => handleClick(true)}>
            <i className="uil-align-alt" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

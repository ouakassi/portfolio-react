import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./HeaderStyle.css";
import NavItem from "./NavItem";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleClick = (state) => {
    setToggleNav(state);
  };

  const activeClassName = "active-link";

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
            <li className="nav__item">
              <NavLink
                onClick={() => handleClick(false)}
                to="/"
                className={({ isActive }) =>
                  isActive ? `nav__link ${activeClassName}` : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon" />
                <span>home</span>
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                onClick={() => handleClick(false)}
                to="/projects"
                className={({ isActive }) =>
                  isActive ? `nav__link ${activeClassName}` : "nav__link"
                }
              >
                <i className="uil uil-folder-open nav__icon" />
                <span>projects</span>
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                onClick={() => handleClick(false)}
                to="/about"
                className={({ isActive }) =>
                  isActive ? `nav__link ${activeClassName}` : "nav__link"
                }
              >
                <i className="uil uil-user-square nav__icon" />
                <span>about</span>
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `nav__link ${activeClassName}` : "nav__link"
                }
                onClick={() => handleClick(false)}
                to="/blog"
              >
                <i className="uil uil-files-landscapes-alt nav__icon" />
                <span>blog</span>
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `nav__link ${activeClassName}` : "nav__link"
                }
                onClick={() => handleClick(false)}
                to="/contact"
              >
                <i className="uil uil-calling nav__icon" />
                <span>contact</span>
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
            <i className="uil uil-slack" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Header.css";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const [windowHeight, setwindowHeight] = useState(0);

  const handlClick2 = () => window.scrollTo(0, 0);

  const handleClick = (state) => {
    setToggleNav(state);
  };

  useEffect(() => {
    const onScroll = () => setwindowHeight(window.pageYOffset);

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={`header ${windowHeight >= 100 ? "headerShadow" : ""}`}
      id="header"
    >
      <nav className="nav">
        <Link to="/">
          <span className="nav__logo"> OUAKASSI</span>
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
            <li className="nav__item">
              <NavLink
                onClick={() => handleClick(false)}
                to="/login"
                className="nav__link"
              >
                <i className="uil uil-user nav__icon"></i>
                <span>login</span>
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
            <i class="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;

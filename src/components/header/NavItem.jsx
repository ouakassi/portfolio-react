import React from "react";
import { NavLink } from "react-router-dom";

import "./NavItem.css";

const NavItem = ({ name, icon, handleClick }) => {
  console.log(handleClick);
  return (
    <li className="nav__item">
      <NavLink
        style={({ isActive }) =>
          isActive ? console.log("active") : console.log("No")
        }
        onClick={() => handleClick(false)}
        to={`/${name === "home" ? "" : name} `}
        className="nav__link "
      >
        <i className={`${icon} nav__icon`} />
        <span className="active-linkf">{name}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;

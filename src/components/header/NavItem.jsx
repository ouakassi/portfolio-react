import React from "react";
import "./NavItem.css";

const NavItem = ({ name, icon, handleClick }) => {
  console.log(handleClick);
  return (
    <li className="nav__item">
      <a
        onClick={() => handleClick(false)}
        href={`/#${name}`}
        className="nav__link"
      >
        <i className={`${icon} nav__icon`} />
        {name}
      </a>
    </li>
  );
};

export default NavItem;

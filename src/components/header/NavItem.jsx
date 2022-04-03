import React from "react";
import "./NavItem.css";

const NavItem = (props, { handleClick }) => (
  <li className="nav__item">
    <a
      href={`#${props.name}`}
      className="nav__link"
      onClick={() => {
        handleClick(false);
      }}
    >
      <i className={`${props.icon} nav__icon`} />
      {props.name}
    </a>
  </li>
);

export default NavItem;

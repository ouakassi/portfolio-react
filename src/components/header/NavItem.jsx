import React from "react";
import "./NavItem.css";

const NavItem = (props) => (
  <li className="nav__item">
    <a href={`#${props.name}`} className="nav__link">
      <i className={`${props.icon} nav__icon`} />
      {props.name}
    </a>
  </li>
);

export default NavItem;

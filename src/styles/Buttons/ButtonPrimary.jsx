import React from "react";
import "./ButtonPrimary.css";

export default function ButtonPrimary(props) {
  return (
    <a
      className="button-primary"
      href={props.link}
      target="_blank "
      rel="noreferrer noopener"
    >
      {props.title}
      <i className={`${props.icon} button__icon`}></i>
    </a>
  );
}

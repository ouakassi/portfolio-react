import React from "react";
import "./ShowMoreButton.css";

export const ShowMoreButton = (props) => {
  return (
    <span className="show-more__button">
      {props.title ? props.title : "Show More"}
      <i className={`${props.icon} button__icon`}></i>
    </span>
  );
};

// uil uil-direction

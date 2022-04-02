import React from "react";
import "./ShowMoreButton.css";

export const ShowMoreButton = (props) => {
  return (
    <span className="show-more__button">
      {props.title ? props.title : "Show More"}
      <i className="uil uil-direction button__icon"></i>
    </span>
  );
};

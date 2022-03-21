import React from "react";
import "./StyledTitle.css";

const StyledTitle = (props) => (
  <h1 className="styled__title">{props.children}</h1>
);

export default StyledTitle;

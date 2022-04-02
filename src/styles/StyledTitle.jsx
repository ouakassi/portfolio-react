import React from "react";
import "./StyledTitle.css";

const StyledTitle = (props) => (
  <h3 className="styled__title">{props.children}</h3>
);

export default StyledTitle;

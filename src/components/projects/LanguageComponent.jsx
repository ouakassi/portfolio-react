import React from "react";

const LanguageComponent = (props) => (
  <span
    style={{
      color: props.mainColor,
      border: `2px ${props.mainColor} solid`,
    }}
    className="project__language"
    key={props.key}
  >
    #{props.tag}
  </span>
);

export default LanguageComponent;

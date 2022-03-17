import React from "react";

const LanguageComponent = (props) => (
  <>
    <span
      style={{
        color: props.mainColor,
        backgroundColor: `${props.mainColor}33`,
      }}
      className="project__language"
      key={props.key}
    >
      <img
        key={props.key}
        src={props.image || "./images/languages/code.svg"}
        alt={props.tag}
      />
      {props.tag}
    </span>
  </>
);

export default LanguageComponent;

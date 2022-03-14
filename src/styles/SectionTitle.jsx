import React from "react";
import "./SectionTitleStyle.css";

const SectionTitle = (props) => (
  <>
    <h2 className="section__title">
      <i className={props.icon + " section__icon"} />
      {props.sectionTitle}
    </h2>
    <span className="section__subtitle">{props.sectionSubtitle}</span>
  </>
);

export default SectionTitle;

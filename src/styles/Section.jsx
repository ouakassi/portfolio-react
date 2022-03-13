import React from "react";
import "./SectionStyle.css";

const Section = (props) => (
  <section className={props.className + " section"} id={props.id}>
    <h2 className="section__title">
      <i className="uil uil-folder-open section__icon" />
      {props.sectionTitle}
    </h2>
    <span className="section__subtitle">{props.sectionSubtitle}</span>
  </section>
);

export default Section;

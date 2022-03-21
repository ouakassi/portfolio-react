import React from "react";
import "./SectionStyle.css";

const SectionTitle = (props) => (
  <section id={props.id} className={`${props.className} section`}>
    <h2 className="section__title">
      <i className={props.icon + " section__icon"} />
      {props.sectionTitle}
    </h2>
    <span className="section__subtitle">{props.sectionSubtitle}</span>
    {props.children}
  </section>
);

export default SectionTitle;

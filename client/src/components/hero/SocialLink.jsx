import React from "react";

const SocialLink = (props) => (
  <a href={props.link} className="home__social-icon">
    <i className={props.icon} />
  </a>
);

export default SocialLink;

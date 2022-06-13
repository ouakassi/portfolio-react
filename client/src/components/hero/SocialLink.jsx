import "./SocialLink.css";

const SocialLink = (props) => (
  <a href={props.link} className="social-icon">
    <i className={props.icon} />
  </a>
);

export default SocialLink;

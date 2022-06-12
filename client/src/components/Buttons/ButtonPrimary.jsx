import "./ButtonPrimary.css";

export default function ButtonPrimary(props) {
  return (
    <a className="button-primary" href={props.link} rel="noreferrer noopener">
      {props.title}
      <i className={`${props.icon} button__icon`}></i>
    </a>
  );
}

import "./ShowMoreButton.css";

export const ShowMoreButton = (props) => {
  return (
    <span
      style={props.style}
      className="show-more__button"
      onClick={props.method}
    >
      {props.title ? props.title : "Show More"}
      {props.icon && <i className={`${props.icon} button__icon`}></i>}
    </span>
  );
};

// uil uil-direction

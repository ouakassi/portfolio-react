import React from "react";
import "./ButtonSubmit.css";

export default function ButtonSubmit(props) {
  return (
    <button className={`button-submit ${props.className}`} type="submit">
      {props.title}
      <i className={`${props.icon} button__icon`}></i>
    </button>
  );
}

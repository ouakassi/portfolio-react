import React, { useRef } from "react";
import "./Login.css";
import Section from "../components/Section";
import ButtonSubmit from "../components/Buttons/ButtonSubmit";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Section
      className="login"
      id="login"
      icon="uil uil-signin"
      sectionTitle="login"
      sectionSubtitle="login to dashboard"
    >
      <div className="login__ui">
        <form onSubmit={handleSubmit} className="login__form">
          <div className="input__container">
            <label htmlFor="email">email</label>
            <input type="email" name="" className="emailInput" ref={emailRef} />
            <i class="login__icon uil uil-at"></i>
          </div>
          <div className="input__container">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name=""
              id=""
              className="passwordInput"
              ref={passwordRef}
            />
            <i class="login__icon uil uil-key-skeleton-alt"></i>
          </div>
          <ButtonSubmit
            className="button"
            title="Login"
            icon="uil uil-sign-in-alt"
          />
        </form>
      </div>
    </Section>
  );
}

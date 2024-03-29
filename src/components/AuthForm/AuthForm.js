import "./AuthForm.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const AuthForm = (props) => {
  const { 
    formMessage,
    formName,
    buttonText,
    text,
    linkText,
    linkPath,
    onSubmit,
    isValid,
    children
  } = props;

  return (
    <section className="auth-form">
      <Link to="/" className="auth-form__logo">
        <img className="auth-form__icon" src={logo} alt="logo icon" />
      </Link>
      <h1 className="auth-form__title">{formMessage}</h1>
      <form 
        className="auth-form__form"
        id={`form-${formName}`}
        name={`form-${formName}`}
        onSubmit={onSubmit}
      >
        {children}
        <button className={`auth-form__btn ${!isValid ? "auth-form__btn_disabled" : ""}`}>
          {buttonText}
        </button>
      </form>
      <p className="auth-form__text">
        {text}{" "}
        <Link className="auth-form__link" to={linkPath} >
          {linkText}
        </Link>
      </p>
    </section>
  );
};

export default AuthForm;
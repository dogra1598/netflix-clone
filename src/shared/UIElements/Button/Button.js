import React from "react";
import { NavLink } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  let button = null;
  if (props.type === "link") {
    button = (
      <NavLink
        to={props.href}
        className={`btn ${props.className ? props.className : ""}`}
        onClick={props.onClick}
      >
        {props.title}
      </NavLink>
    );
  } else {
    button = (
      <button
        className={`btn ${props.className ? props.className : ""}`}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    );
  }

  return <React.Fragment>{button}</React.Fragment>;
};

export default Button;

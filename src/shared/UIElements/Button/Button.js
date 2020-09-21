import React from "react";

import "./Button.css";

const Button = (props) => {
  let button = null;
  if (props.type === "link") {
    button = (
      <a
        href={props.href}
        className={`btn ${props.className ? props.className : ""}`}
      >
        {props.title}
      </a>
    );
  } else {
    button = (
      <button className={`btn ${props.className ? props.className : ""}`}>
        {props.title}
      </button>
    );
  }

  return (
    <React.Fragment>
        {button}
    </React.Fragment>
  );
};

export default Button;

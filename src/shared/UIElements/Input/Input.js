import React, { useState } from "react";

import "./Input.css";

const Input = (props) => {
  const [isTouched, setIsTouched] = useState(false);

  const onTouchHandler = () => {
    setIsTouched(true);
  };

  let input;
  if (props.type === "textarea") {
    input = (
      <div className={`formgroup ${props.className}`}>
        <label htmlFor={props.id}>{props.label}</label>
        <textarea id={props.id} onChange={props.onChangeHandler}>
          {props.children}
        </textarea>
      </div>
    );
  } else {
    input = (
      <div
        className={`formgroup ${props.className} ${
          !props.isValid && isTouched && "invalidInput"
        }`}
      >
        <label htmlFor={props.id}>
          {props.label}
          <br />
          <span className="inputError">
            {!props.isValid && isTouched && props.error}
          </span>
        </label>
        <input
          type={props.type}
          id={props.id}
          onChange={props.onChangeHandler}
          onBlur={onTouchHandler}
        />
      </div>
    );
  }

  return <React.Fragment>{input}</React.Fragment>;
};

export default Input;

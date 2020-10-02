import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  validate,
  VALIDATOR_MINLENGTH,
} from "../shared/util/validators";
import Navbar from "../shared/Navbar/Navbar";
import Input from "../shared/UIElements/Input/Input";
import Modal from "../shared/UIElements/Modal/Modal";
import Spinner from "../shared/UIElements/Spinner/Spinner";
import "./Auth.css";

const Signup = () => {
  const [redirect, setRedirect] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const onEmailChangeHandler = (event) => {
    const validators = [VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()];
    if (validate(event.target.value, validators)) setIsEmailValid(true);
    else setIsEmailValid(false);

    setEmail(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    const validators = [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)];
    if (validate(event.target.value, validators)) setIsPasswordValid(true);
    else setIsPasswordValid(false);

    setPassword(event.target.value);
  };

  const onSignupHandler = (event) => {
    event.preventDefault();
    setShow(true);
    axios
      .post("http://localhost:5000/signup", {
        email: email,
        password: password,
      })
      .then((response) => {
        setRedirect(true);
        setShow(false);
      })
      .catch((err) => {
        setShow(false);
        setError(err.response.data.message);
      });
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  const clearErrorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {show && <Spinner show={show} />}
      <Modal show={error} clicked={clearErrorHandler}>
        {error}
      </Modal>
      <Navbar />
      <div
        className="lineBreak"
        style={{
          height: "0.1rem",
          background: "#c5c6c7",
          marginTop: "7rem",
        }}
      >
        &nbsp;
      </div>
      <div className="signup">
        <h1 className="signup__primaryHeading">Sign Up</h1>
        <h2 className="signup__secondaryHeading">
          Netflix is personalised for you. Signup to watch Netflix on any device
          at any time.
        </h2>
        <form onSubmit={onSignupHandler}>
          <Input
            type="email"
            id="email"
            label="Email"
            isValid={isEmailValid}
            onChangeHandler={onEmailChangeHandler}
            error="Enter a valid email"
          />
          <Input
            type="password"
            id="password"
            label="Add a Password"
            isValid={isPasswordValid}
            onChangeHandler={onPasswordChangeHandler}
            error="Enter a password (maxLength = 5)"
          />
          <input
            type="submit"
            className={`submit ${
              (!isEmailValid || !isPasswordValid) && "disableSubmit"
            }`}
            value="Signup &rarr;"
            disabled={!isEmailValid || !isPasswordValid}
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Signup;

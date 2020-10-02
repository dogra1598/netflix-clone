import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  validate,
  VALIDATOR_MINLENGTH,
} from "../shared/util/validators";
import Input from "../shared/UIElements/Input/Input";
import { AuthContext } from "../shared/context/authContext";
import Navbar from "../shared/Navbar/Navbar";
import Modal from "../shared/UIElements/Modal/Modal";
import Spinner from "../shared/UIElements/Spinner/Spinner";
import "./Auth.css";

const Login = () => {
  const auth = useContext(AuthContext);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
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

  const onLoginHandler = (event) => {
    event.preventDefault();
    setShow(true);
    axios
      .post("http://localhost:5000/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        auth.login(response.data.userId, response.data.token);
        setRedirect(true);
        setShow(false);
      })
      .catch((err) => {
        setShow(false);
        console.log(err.response);
      });
  };

  if (redirect) {
    return <Redirect to="/" />;
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
        <h1 className="signup__primaryHeading">Login</h1>
        <h2 className="signup__secondaryHeading">
          Netflix is personalised for you. Login to watch Netflix on any device
          at any time.
        </h2>
        <form onSubmit={onLoginHandler}>
          <Input
            type="email"
            id="email"
            label="Email"
            isValid={isEmailValid}
            onChangeHandler={onEmailChangeHandler}
            error="Please enter the registered email"
          />
          <Input
            type="password"
            id="password"
            label="Password"
            isValid={isPasswordValid}
            onChangeHandler={onPasswordChangeHandler}
            error="Please enter the correct password"
          />
          <input
            type="submit"
            className={`submit ${
              (!isEmailValid || !isPasswordValid) && "disableSubmit"
            }`}
            value="Login &rarr;"
            disabled={!isEmailValid || !isPasswordValid}
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;

import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../context/authContext";
import Button from "../UIElements/Button/Button";
import "./Navbar.css";

const Navbar = () => {
  const auth = useContext(AuthContext);

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <NavLink to="/">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
          alt="Netflix logo"
        />
      </NavLink>
      {!auth.isLoggedIn && (
        <div>
          <Button type="link" href="/signup" title="Sign Up" />
          <Button type="link" href="/login" title="Login In" />
        </div>
      )}
      {auth.isLoggedIn && (
        <div>
          <Button title="Logout" onClick={auth.logout} />
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { useAuth } from "./shared/hook/authHook";
import { AuthContext } from "./shared/context/authContext";
import Main from "./Netfix-clone/Pages/Main";
import Home from "./Netfix-clone/Pages/Home";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Navbar from "./shared/Navbar/Navbar";

const App = () => {
  const { token, userId, login, logout } = useAuth();
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        login: login,
        logout: logout,
        userId: userId,
      }}
    >
      <Router>
        <Navbar />
        {routes}
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

import React from "react";

import Navbar from "./shared/Navbar/Navbar";
import Main from "./Main/Pages/Main";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;

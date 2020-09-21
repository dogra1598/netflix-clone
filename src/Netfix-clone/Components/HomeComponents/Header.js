import React from "react";

import Button from "../../../shared/UIElements/Button/Button";
import bg from "../../../Assets/Images/bg.jpg"
import "./Header.css";

const Header = () => {
  return (
    <div
      className="home__header"
      style={{
        backgroundImage:
          `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="header__overlay"></div>
      <div className="header__headings">
        <div className="header__primaryHeading">
          <h1>Unlimited movies, TV shows and more.</h1>
        </div>
        <div className="header__secondaryHeading">
          <h2>Watch anywhere. Cancel anytime.</h2>
        </div>

        <div className="header__signup">
          <h2>Ready to watch? Sign up to create your membership.</h2>
          <Button type="link" href="#" title="Get Started &rarr;" />    {/* signup link */}
        </div>
      </div>
    </div>
  );
};

export default Header;

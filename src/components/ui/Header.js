import React from "react";
import logo from "../../img/weed-logo.png";

const Header = () => {
  return (
    <header className="center">
      <img src={logo} alt="logo" />
      <h1>Find your strain</h1>
    </header>
  );
};

export default Header;

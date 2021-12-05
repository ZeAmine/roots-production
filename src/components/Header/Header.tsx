import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a className="header_logo" href="#">
        <img
          src={process.env.PUBLIC_URL + "assets/imgs/logo.svg"}
          alt="logo root"
        />
      </a>
      <div className="login_button">
        <a href="#" className="button_connect">
          Se connecter
        </a>
      </div>
    </div>
  );
};

export default Header;

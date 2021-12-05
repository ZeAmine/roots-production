import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "assets/imgs/logo.svg"}
          alt="logo root"
        />
      </a>
      <a href="https://roots.tinker.ovh/oauth" className="button_connect">
        <div className="login_button">Se connecter</div>
      </a>
    </div>
  );
};

export default Header;

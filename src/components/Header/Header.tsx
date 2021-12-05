import React from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../decl";
import "./Header.css";

interface HeaderProps {
  appUser: IUser | undefined;
}

const Header = ({ appUser }: HeaderProps) => {
  return (
    <div className="header">
      <Link to="/">
        <div className="header_logo">
          <img
            src={process.env.PUBLIC_URL + "assets/icons/logo.svg"}
            alt="logo Roots"
          />
        </div>
      </Link>
      <div className="header_btn_profil">
        <div className="header_btn_img">
          <img src={appUser?.userImageUrl} alt="photo de profil" />
        </div>
        <div className="header_btn_name">
          <span>{appUser?.username}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

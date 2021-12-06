import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../decl";
import { getUserInfos } from "../../api";
import "./Header.css";

export type HeaderState = {
  user: IUser | undefined;
};

const Header = () => {
  const [appUser, setAppUser] = useState<HeaderState>();

  const fetchUser = async () => {
    const userPage = await getUserInfos();
    setAppUser({ user: userPage });
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
        <div className="header_btn_img_container">
          <img
            src={appUser?.user?.userImageUrl}
            alt="photo de profil"
            className="header_btn_img"
          />
        </div>
        <div className="header_btn_name">
          <span>{appUser?.user?.username}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

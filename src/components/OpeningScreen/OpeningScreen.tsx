import React from "react";
import "./OpeningScreen.css";

const OpeningScreen = () => {
  return (
    <section className="section screen">
      <div className="screen_wrap container">
        <div className="screen__block">
          <div className="screen_img_container">
            <img
              src={process.env.PUBLIC_URL + "assets/icons/logo.svg"}
              alt="icon logo"
            />
          </div>
          <span className="screen_text">
            Votre interface de découverte musicale, propulsé par Spotify.
          </span>
          <a href="https://roots.tinker.ovh/oauth">
            <button className="screen_btn">
              <span>Se connecter avec Spotify</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpeningScreen;

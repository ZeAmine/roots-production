import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="section newsletter">
      <div className="newsletter__wrap container">
        <div className="newsletter__block">
          <div className="newsletter__text">
            <div className="newsletter__title">
              <h2>NEWSLETTER</h2>
            </div>
            <div className="newsletter__subtitle">
              <h2>RESTEZ INFORMÉ DES PROCHAINS CONCOURS</h2>
            </div>
          </div>
          <div className="newsletter__bar">
            <input
              type="text"
              className="newsletter__input"
              placeholder="Entrez votre adresse mail"
            />
            <button className="newsletter__btn">S'inscrire</button>
          </div>
        </div>
        <div className="newsletter_bg">
          <img
            src={process.env.PUBLIC_URL + "assets/imgs/logo_bg.png"}
            alt="forme"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

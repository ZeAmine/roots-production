import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap container">
        <div className="footer__start">
          <div className="footer__links">
            <h4>RESEAUX</h4>
            <ul className="footer_links_list">
              <li className="footer_links_item">
                <a href="/">Twitter</a>
              </li>
              <li className="footer_links_item">
                <a href="/">Instagram</a>
              </li>
              <li className="footer_links_item">
                <a href="/">Facebook</a>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <h4>A PROPOS</h4>
            <ul className="footer_links_list">
              <li className="footer_links_item">
                <a href="/">Mentions légales</a>
              </li>
              <li className="footer_links_item">
                <a href="/">Politique</a>
              </li>
              <li className="footer_links_item">
                <a href="/">CGU</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__end">
          <a href="/">
            <img
              src={process.env.PUBLIC_URL + "assets/imgs/logo2.svg"}
              alt="logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

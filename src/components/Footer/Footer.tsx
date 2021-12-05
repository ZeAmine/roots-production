import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap container">
        <div className="footer__start">
          <div className="footer__links">
            <h4>RÉSEAUX</h4>
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
            <h4>À PROPOS</h4>
            <ul className="footer_links_list">
              <li className="footer_links_item">
                <Link to="/mentions-legales">Mentions légales</Link>
              </li>
              <li className="footer_links_item">
                <Link to="/politiques">Politique</Link>
              </li>
              <li className="footer_links_item">
                <Link to="/CGU">CGU</Link>
              </li>
            </ul>
          </div>
          <div className="footer_block_btn">
            <div className="footer_string_rotate">
              <img
                src={process.env.PUBLIC_URL + "assets/icons/back_string.svg"}
                alt="phrase qui tourne"
              />
            </div>
            {/* <Link to="#"> */}
            <a href="#topPage">
              <button className="footer__btn">
                <div className="footer_btn_container_img">
                  <img
                    src={process.env.PUBLIC_URL + "assets/icons/arrow_down.svg"}
                    alt="arrow"
                    className="footer_btn_img"
                  />
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="footer__end">
          <img
            src={process.env.PUBLIC_URL + "assets/icons/logo2.svg"}
            alt="logo"
          />
        </div>
        <div className="footer_bg cercle">
          <img
            src={process.env.PUBLIC_URL + "assets/imgs/cercle_bg_w.png"}
            alt="forme"
          />
        </div>
        <div className="footer_bg rectangle">
          <img
            src={process.env.PUBLIC_URL + "assets/imgs/rectangle_bg_w.png"}
            alt="forme"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import "./Winner.css";

const Winner = () => {
  const [slideBtnInsta, setSlideBtnInsta] = useState<boolean>(false);
  const [slideBtnSpo, setSlideBtnSpo] = useState<boolean>(false);

  return (
    <section className="section winner">
      <div className="winner__wrap">
        <div className="winner_block">
          <div className="winner_img_container">
            <img
              src={process.env.PUBLIC_URL + "assets/imgs/platypus.jpg"}
              alt="platypus"
              className="winner__img"
            />
          </div>
          <div className="winner__symbol">
            <ul className="winner_symbol_list">
              <li className="winner_symbol_item small">
                <svg
                  width="40"
                  height="49"
                  viewBox="0 0 40 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="winner_symbol_brand"
                >
                  <path
                    d="M13.4132 20.8788L5.98482 20.456L0 18.5344L3.67997 7.35033L9.73331 9.27199L15.9334 13.2354L14.0592 6.17812V0H26.0289V6.24538L24.1546 13.2546L30.3352 9.27199L36.32 7.35033L40 18.5344L34.0152 20.456L26.5868 20.8788L32.3563 25.4812L36.1047 30.5063L26.3714 37.3762L22.6915 32.3463L20.0587 25.5532L17.3183 32.4183L13.6433 37.3762L3.97847 30.5063L7.64375 25.3947L13.4132 20.8788Z"
                    fill="white"
                    className="cl"
                  />
                  <path
                    d="M36.1245 39.7778H3.89548V48.8721H36.1245V39.7778Z"
                    fill="white"
                    className="cl"
                  />
                </svg>
              </li>
              <li className="winner_symbol_item big">
                <svg
                  width="40"
                  height="49"
                  viewBox="0 0 40 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="winner_symbol_brand"
                >
                  <path
                    d="M13.4132 20.8788L5.98482 20.456L0 18.5344L3.67997 7.35033L9.73331 9.27199L15.9334 13.2354L14.0592 6.17812V0H26.0289V6.24538L24.1546 13.2546L30.3352 9.27199L36.32 7.35033L40 18.5344L34.0152 20.456L26.5868 20.8788L32.3563 25.4812L36.1047 30.5063L26.3714 37.3762L22.6915 32.3463L20.0587 25.5532L17.3183 32.4183L13.6433 37.3762L3.97847 30.5063L7.64375 25.3947L13.4132 20.8788Z"
                    fill="white"
                  />
                  <path
                    d="M36.1245 39.7778H3.89548V48.8721H36.1245V39.7778Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li className="winner_symbol_item small">
                <svg
                  width="40"
                  height="49"
                  viewBox="0 0 40 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="winner_symbol_brand"
                >
                  <path
                    d="M13.4132 20.8788L5.98482 20.456L0 18.5344L3.67997 7.35033L9.73331 9.27199L15.9334 13.2354L14.0592 6.17812V0H26.0289V6.24538L24.1546 13.2546L30.3352 9.27199L36.32 7.35033L40 18.5344L34.0152 20.456L26.5868 20.8788L32.3563 25.4812L36.1047 30.5063L26.3714 37.3762L22.6915 32.3463L20.0587 25.5532L17.3183 32.4183L13.6433 37.3762L3.97847 30.5063L7.64375 25.3947L13.4132 20.8788Z"
                    fill="white"
                    className="cl"
                  />
                  <path
                    d="M36.1245 39.7778H3.89548V48.8721H36.1245V39.7778Z"
                    fill="white"
                    className="cl"
                  />
                </svg>
              </li>
            </ul>
            <span className="winner_symbol_text">LE ROOTS DE LA SEMAINE</span>
          </div>
          <div className="winner_block_name">
            <h4 className="winner__name stroke">PLATYPUS</h4>
            <h4 className="winner__name">PLATYPUS</h4>
            <h4 className="winner__name stroke">PLATYPUS</h4>
          </div>
          <div className="winner__social">
            <a
              href="https://open.spotify.com/artist/57SWedelmLYBfgS4UvbGXw"
              target="_blank"
            >
              <button
                className="cercle__btn spotify"
                style={{
                  width: slideBtnSpo ? "150px" : "60px",
                }}
                onMouseOver={() => setSlideBtnSpo(true)}
                onMouseLeave={() => setSlideBtnSpo(false)}
              >
                <div className="cercle_btn_container spotify">
                  <img
                    src={process.env.PUBLIC_URL + "assets/icons/spotify.svg"}
                    alt="icon vote"
                    className="card_btn_icon"
                  />
                </div>
                {slideBtnSpo ? (
                  <span className="cercle_btn_text">S'abonner</span>
                ) : null}
              </button>
            </a>
            <a href="https://www.instagram.com/platypus.music/" target="_blank">
              <button
                className="cercle__btn instagram"
                style={{
                  width: slideBtnInsta ? "120px" : "60px",
                }}
                onMouseOver={() => setSlideBtnInsta(true)}
                onMouseLeave={() => setSlideBtnInsta(false)}
              >
                <div className="cercle_btn_container instagram">
                  <img
                    src={process.env.PUBLIC_URL + "assets/icons/instagram.svg"}
                    alt="icon vote"
                    className="card_btn_icon"
                  />
                </div>
                {slideBtnInsta ? (
                  <span className="cercle_btn_text">Suivre</span>
                ) : null}
              </button>
            </a>
          </div>
          <div className="winner__band">
            <div className="winner_band_container">
              <h3 data-text="LE VAINQUEUR DE LA SEMAINE • LE VAINQUEUR DE LA SEMAINE •">
                LE VAINQUEUR DE LA SEMAINE • LE VAINQUEUR DE LA SEMAINE •
              </h3>
            </div>
          </div>
        </div>
        <button className="winner__scroll">
          <a href="#ListCard">
            <span className="winner_scroll_container">
                <span className="winner_scroll_text">Votez pour le prochain</span>
                <div className="winner_scroll_img">
                  <img
                    src={process.env.PUBLIC_URL + "assets/icons/arrow_down.svg"}
                    alt="fleche vers le bas"
                  />
                </div>
            </span>
          </a>
        </button>
      </div>
    </section>
  );
};

export default Winner;

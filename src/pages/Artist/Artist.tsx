import React from "react";
import ArtistInfo from "../../components/ArtistInfo/ArtistInfo";
import ArtistListTrack from "../../components/ArtistListTrack/ArtistListTrack";
import { Link } from "react-router-dom";
import "./Artist.css";

const Artist = () => {
  return (
    <section className="section artist">
      <div className="artist__wrap container">
        <div className="artist_btn_back_block">
          <Link to="/">
            <button className="artist_btn_back">
              <div className="artist_btn_back_container">
                <img
                  src={process.env.PUBLIC_URL + "assets/icons/arrow_down.svg"}
                  alt="arrow"
                />
              </div>
            </button>
          </Link>
        </div>
        <ArtistInfo />
        <ArtistListTrack />
      </div>
    </section>
  );
};

export default Artist;

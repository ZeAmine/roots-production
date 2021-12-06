import React from "react";
import "./Welcome.css";
import Tilt from "react-parallax-tilt";

const Welcome = () => {
  return (
    <section id="topPage" className="welcome">
      <div className="content_welcome">
        {/* ###Title### */}
        <div className="title_artist">
          <Tilt
            tiltReverse={true}
            className="track-on-window"
            perspective={500}
            scale={1.0}
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            trackOnWindow={true}
          >
            <div className="drive-text">
              <span>Propulsez</span>
            </div>
            <div className="artist-text">
              <span>
                votre <span className="text-stroke">artiste</span>
              </span>
            </div>
            <div className="favorite-text">
              <span>préféré</span>
            </div>
          </Tilt>
        </div>
        {/* ### Albums### */}
        <div className="albums inner-element">
          <div className="first-row">
            <Tilt
              tiltReverse={true}
              className="track-on-window"
              perspective={500}
              scale={1.0}
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              trackOnWindow={true}
            >
              <img
                src={process.env.PUBLIC_URL + "assets/album/XXIVAlbum.png"}
                alt="XXIV Album"
                className="XXIVAlbum inner-element"
              />
            </Tilt>
            <Tilt
              tiltReverse={true}
              className="track-on-window"
              perspective={500}
              scale={1.0}
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              trackOnWindow={true}
            >
              <img
                src={process.env.PUBLIC_URL + "assets/album/platypusAlbum.png"}
                alt="Platypus Album"
                className="platypusAlbum inner-element"
              />
            </Tilt>
          </div>
          <div className="second-row">
            <Tilt
              tiltReverse={true}
              className="track-on-window"
              perspective={500}
              scale={1.0}
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              trackOnWindow={true}
            >
              <img
                src={process.env.PUBLIC_URL + "assets/album/faceAlbum.png"}
                alt="Vertigo Album"
                className="faceAlbum inner-element"
              />
            </Tilt>
            <Tilt
              tiltReverse={true}
              className="track-on-window"
              perspective={500}
              scale={1.0}
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              trackOnWindow={true}
            >
              <img
                src={process.env.PUBLIC_URL + "assets/album/donutAlbum.png"}
                alt="Donut Album"
                className="donutAlbum inner-element"
              />
            </Tilt>
          </div>
        </div>
        <div className="welcome_block_btn">
          <a href="#pres">
            <button className="welcome__btn">
              <div className="welcome_btn_container_img">
                <img
                  src={process.env.PUBLIC_URL + "assets/icons/arrow_down.svg"}
                  alt="arrow"
                  className="welcome_btn_img"
                />
              </div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

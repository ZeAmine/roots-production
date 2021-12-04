import React, { useEffect, useRef, useState } from "react";
// import Background from '../../../public/assets/imgs/gray_vector.svg';
import "./Welcome.css";
import Tilt from "react-parallax-tilt";

const Welcome = () => {
  const [arrow, setArrow] = useState(false);
  const [offset, setOffset] = useState(0);
  const img = useRef(null);
  let test = 0;

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  // const [hover, setHover] = useState(false)

  return (
    <section className="body-welcome">
      <div className="content_welcome">
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
                votre <span className="italic">artiste</span>
              </span>
            </div>
            <div className="favorite-text">
              <span>préféré</span>
            </div>
          </Tilt>
        </div>

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
        {/* </Tilt> */}
        <a className="progress" href="#">
          <div className="waves_button">
            <div
              className="wave"
              style={{
                height: "31px" + offset,
              }}
            />
          </div>
          <img
            src={process.env.PUBLIC_URL + "assets/imgs/arrow_vector.svg"}
            alt="arrow"
            className="arrow"
          />
        </a>
      </div>
    </section>
  );
};

export default Welcome;

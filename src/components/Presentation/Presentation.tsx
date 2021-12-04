import React, { useEffect, useRef, useState} from 'react';
import "./Presentation.css"
import Tilt from 'react-parallax-tilt';

const Presentation = () => {
  return (
      <div id="anchor" className="background">
        <div className="bodyPresentation">
          <Tilt
                          className="track-on-window"
                          perspective={500}
                          scale={1.0}
                          tiltMaxAngleX={4}
                          tiltMaxAngleY={4}
                          trackOnWindow={true}
                      >
              <img src={process.env.PUBLIC_URL + "assets/imgs/purple_women.png"} alt='Women picture' className="women-picture"/>
          </Tilt>

          <div className="text-explanation">
            <h3>Permettez à la nouvelle étoile montante de la musique de se démarquer.</h3>
            <div className="explanation">
              <p>
                 Chaque semaine, le vainqueur de notre concours <strong>ROOTS®</strong> sera mis en avant sur nos différents réseaux ainsi que sur ceux de nos partenaires officiels, <strong>Spotify</strong> et <strong>RTL.</strong>
              </p>

              <div className="logos">
                <img src={process.env.PUBLIC_URL + "assets/imgs/spotify_logo.svg"} alt='Spotify logo'/>
                <img src={process.env.PUBLIC_URL + "assets/imgs/RTL.svg"} alt='Rtl logo'/>
                <img src={process.env.PUBLIC_URL + "assets/imgs/waramLogo.svg"} alt='Waram Logo' className="smallLogo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Presentation;
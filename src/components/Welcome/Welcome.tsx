import React, { useEffect, useRef, useState} from 'react';
import "./Welcome.css"
import Tilt from 'react-parallax-tilt';

const Welcome = () => {
const img = useRef(null)
// const [wave, setWave] = useState(false);
// let waveValue = 0;

// waveValue = (window.scrollY/10);
// console.log(waveValue)
// const str = waveValue.toString();
// const changeWave = () =>{
//     if(window.scrollY >=80) {
//         setWave(true);
//     } else {
//         setWave(false);
//     }
// }

// window.addEventListener('scroll', changeWave)

    return (
        <section className="body-welcome">
             <div className="content_welcome">

{/* ###
                    Title
### */}

                <div className="title_artist">
                    <Tilt tiltReverse={true}
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
                            <span>votre <span className="white-text">artiste</span></span>
                        </div>
                        <div className="favorite-text">
                            <span>préféré</span>
                        </div>
                    </Tilt>
                </div>

{/* ###
                    Albums   
### */}

                <div className="albums inner-element">
                    <div className="first-row">
                    <Tilt tiltReverse={true}
                        className="track-on-window"
                        perspective={500}
                        scale={1.0}
                        tiltMaxAngleX={4}
                        tiltMaxAngleY={4}
                        trackOnWindow={true}
                    >
                        <img src={process.env.PUBLIC_URL + "assets/album/XXIVAlbum.png"} alt="XXIV Album" className="XXIVAlbum inner-element"/>
                    </Tilt>
                    <Tilt tiltReverse={true}
                        className="track-on-window"
                        perspective={500}
                        scale={1.0}
                        tiltMaxAngleX={4}
                        tiltMaxAngleY={4}
                        trackOnWindow={true}
    
                    >
                        <img src={process.env.PUBLIC_URL + "assets/album/platypusAlbum.png"} alt="Platypus Album" className="platypusAlbum inner-element"/>
                    </Tilt>
                    </div>
                    <div className="second-row">
                    <Tilt tiltReverse={true}
                        className="track-on-window"
                        perspective={500}
                        scale={1.0}
                        tiltMaxAngleX={4}
                        tiltMaxAngleY={4}
                        trackOnWindow={true}
    
                    >
                        <img src={process.env.PUBLIC_URL + "assets/album/faceAlbum.png"} alt="Vertigo Album" className="faceAlbum inner-element"/>
                    </Tilt>
                    <Tilt tiltReverse={true}
                        className="track-on-window"
                        perspective={500}
                        scale={1.0}
                        tiltMaxAngleX={4}
                        tiltMaxAngleY={4}
                        trackOnWindow={true}
    
                    >
                        <img src={process.env.PUBLIC_URL + "assets/album/donutAlbum.png"} alt="Donut Album" className="donutAlbum inner-element"/>
                     </Tilt>
                    </div>
                </div>

{/* ###
                    Button 
### */}

                <a className="progress" href="#anchor">
                    <div className="waves_button">
                        <div className="wave"
                        //  style={{
                        //     height: wave ? `${(85 + str)}%`: "85px"
                        // }}
                          ></div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "assets/imgs/arrow_vector.svg"} alt="arrow" className="arrow"/>
                </a>
            </div>
        </section>
    );
};

export default Welcome;
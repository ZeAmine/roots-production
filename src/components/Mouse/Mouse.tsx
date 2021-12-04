// import { useState, useEffect } from "react";
// import useMousePosition from "./useMousePosition";
// import "./Mouse.css"

// function Mouse() {


//   const [backgroundOK, setbackgroundOK] = useState<boolean>(false);
//   const { x, y } = useMousePosition();
//   const i = window.innerWidth;

//   const centerOfScreen = i/2;
//   const hasMovedCursor = typeof x === "number" && typeof y === "number";



//   useEffect(() => {
//     {x == centerOfScreen && (
//       setbackgroundOK(true)
//      )}
//   });

//   return (
//     <div className="App"
//     style={{
//       backgroundColor: backgroundOK ? "red" : "white",
//     }}>



//       <h1>
//         {hasMovedCursor
//           ? `Your cursor is at ${x}, ${y}.`
//           : "Move your mouse around."}
//       </h1>
//       <p>
//         {`background state ${backgroundOK}`}
//       </p>
//       <p>
//         {`width size ${i}`}<br></br>
//         {`center ${centerOfScreen}`}
//       </p>
//       <div className="circle">

//       </div>
//     </div>
//   );
// }


import React from 'react';

import Tilt from 'react-parallax-tilt';
// import './ParallaxEffectImg.demotab.scss';
// import imgTree from './img/tree.png';

const Mouse = () => (
  <Tilt
    className="parallax-effect-img"
    tiltMaxAngleX={40}
    tiltMaxAngleY={40}
    perspective={800}
    transitionSpeed={1500}
    scale={1.1}
    gyroscope={true}
  >
     <img src={process.env.PUBLIC_URL + "assets/album/XXIVAlbum.jpg"} alt="XXIV Album" className="inner-element"/>
  </Tilt>
);

export default Mouse;
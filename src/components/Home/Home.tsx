import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cards from "../Cards/Cards";
// import { ICardItems, ICards } from "../../decl";
// import { getCards } from "../../api";
import Footer from "../Footer/Footer";
import Marquee from "../Marquee/Marquee";
import Winner from "../Winner/Winner";
import Newsletter from "../Newsletter/Newsletter";
import "./Home.css";

// interface AppState {
//   cards: ICards | undefined;
// }

const Home = () => {
  // const [appCards, setAppCards] = useState<AppState>();
  //
  // const fetchCards = async () => {
  //   const cardsPages = await getCards();
  //   setAppCards({ cards: cardsPages });
  // };
  // console.log(appCards);
  //
  // useEffect(() => {
  //   fetchCards();
  // }, []);

  return (
    <div className="home">
      {/*Home*/}
      <Winner />
      {/*<Cards cards={appCards} />*/}
      <Marquee />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;

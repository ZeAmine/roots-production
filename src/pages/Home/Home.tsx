import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cards from "../Cards/Cards";
// import { ICardItems, ICards } from "../../decl";
// import { getCards } from "../../api";
import Marquee from "../../components/Marquee/Marquee";
import Winner from "../../components/Winner/Winner";
import Newsletter from "../../components/Newsletter/Newsletter";
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
    <main className="home">
      <div className="main__wrap">
        {/*Home*/}
        <Winner />
        {/*<Cards cards={appCards} />*/}
        <Marquee />
        <Newsletter />
      </div>
    </main>
  );
};

export default Home;

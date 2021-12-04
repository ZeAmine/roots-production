import React, { useState, useEffect } from "react";
import Welcome from "../../components/Welcome/Welcome";
import Presentation from "../../components/Presentation/Presentation";
import Winner from "../../components/Winner/Winner";
import ListCard from "../../components/ListCard/ListCard";
import Marquee from "../../components/Marquee/Marquee";
import Newsletter from "../../components/Newsletter/Newsletter";
import { getCards } from "../../api";
import { ICards } from "../../decl";
import "./Home.css";

interface AppState {
  cards: ICards | undefined;
}

const Home = () => {
  const [appCards, setAppCards] = useState<AppState>();

  const fetchCards = async () => {
    const cardsPages = await getCards();
    setAppCards({ cards: cardsPages });
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <main className="home">
      <div className="home__wrap">
        <Welcome/>
        <Presentation/>
        <Winner />
        <ListCard cards={appCards?.cards} />
        <Marquee />
        <Newsletter />
      </div>
    </main>
  );
};

export default Home;

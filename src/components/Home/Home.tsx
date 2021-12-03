import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Cards/Cards";
import { ICardItems, ICards } from "../../decl";
import { getCards } from "../../api";
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
  console.log(appCards);

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="home">
      <Cards cards={appCards} />
    </div>
  );
};

export default Home;

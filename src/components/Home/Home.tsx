import React, { useState, useEffect } from "react";
import ListCard from "../ListCard/ListCard";
import { ICards } from "../../decl";
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

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="home">
      <ListCard cards={appCards?.cards} />
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import Welcome from "../../components/Welcome/Welcome";
import Presentation from "../../components/Presentation/Presentation";
import Winner from "../../components/Winner/Winner";
import ListCard from "../../components/ListCard/ListCard";
import Marquee from "../../components/Marquee/Marquee";
import Newsletter from "../../components/Newsletter/Newsletter";
import { getVote } from "../../api";
import { ICards, IVote } from "../../decl";
import "./Home.css";
import OpeningScreen from "../../components/OpeningScreen/OpeningScreen";

interface HomeState {
  cards: ICards | undefined;
  vote: IVote | undefined;
}

interface HomeProps {
  auth: boolean;
}

const Home = ({ auth }: HomeProps) => {
  const [appCards, setAppCards] = useState<HomeState["cards"]>();
  const [appVote, setAppVote] = useState<HomeState["vote"]>();

  // const fetchCards = async () => {
  //   const cardsPages = await getCards();
  //   setAppCards({ cards: cardsPages });
  // };

  const fetchVote = async () => {
    const votePage = await getVote();
    setAppVote({ vote: votePage });
  };

  useEffect(() => {
    // fetchCards();
    fetchVote();
  }, []);

  return (
    <>
      {!auth ? (
        <OpeningScreen />
      ) : (
        <main className="home">
          <div className="home__wrap">
            <Welcome />
            <Presentation />
            <Winner />
            <ListCard />
            <Marquee />
            <Newsletter />
          </div>
        </main>
      )}
    </>
  );
};

export default Home;

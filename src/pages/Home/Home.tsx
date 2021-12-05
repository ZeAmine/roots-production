import React, { useState, useEffect } from "react";
import Welcome from "../../components/Welcome/Welcome";
import Presentation from "../../components/Presentation/Presentation";
import Winner from "../../components/Winner/Winner";
import ListCard from "../../components/ListCard/ListCard";
import Marquee from "../../components/Marquee/Marquee";
import Newsletter from "../../components/Newsletter/Newsletter";
import { getUserInfos, getVote } from "../../api";
import { ICards, IUser, IVote } from "../../decl";
import "./Home.css";

interface AppState {
  cards: ICards | undefined;
  user: IUser | any;
  vote: IVote | undefined;
}

const Home = () => {
  const [appCards, setAppCards] = useState<AppState["cards"]>();
  const [appUser, setAppUser] = useState<AppState["user"]>();
  const [appVote, setAppVote] = useState<AppState["vote"]>();

  // const fetchCards = async () => {
  //   const cardsPages = await getCards();
  //   setAppCards({ cards: cardsPages });
  // };

  const fetchUser = async () => {
    const userPage = await getUserInfos();
    setAppUser({ user: userPage });
    // console.log(userPage);
  };

  const fetchVote = async () => {
    const votePage = await getVote();
    setAppVote({ vote: votePage });
    // console.log(votePage);
  };

  useEffect(() => {
    // fetchCards();
    fetchUser();
    fetchVote();
  }, []);

  return (
    <main className="home">
      <div className="home__wrap">
        <Welcome />
        <Presentation />
        <Winner />s{/*<ListCard cards={appCards?.cards} />*/}
        <ListCard />
        <Marquee />
        <Newsletter />
      </div>
    </main>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import Welcome from "../../components/Welcome/Welcome";
import Presentation from "../../components/Presentation/Presentation";
import Winner from "../../components/Winner/Winner";
import ListCard from "../../components/ListCard/ListCard";
import Marquee from "../../components/Marquee/Marquee";
import Newsletter from "../../components/Newsletter/Newsletter";
import { getUserInfos } from "../../api";
import { ICards, IUser } from "../../decl";
import "./Home.css";

interface AppState {
  // cards: ICards | undefined;
  user: IUser | any;
}

const Home = () => {
  // const [appCards, setAppCards] = useState<AppState["cards"]>();
  const [user, setUser] = useState<AppState["user"]>();

  // const fetchCards = async () => {
  //   const cardsPages = await getCards();
  //   setAppCards({ cards: cardsPages });
  // };
  console.log(user);

  useEffect(() => {
    // fetchCards();
    const fetchUser = async () => {
      const userPage = await getUserInfos();
      setUser({ user: userPage });
      // console.log(userPage);
    };
    fetchUser();
  }, []);

  return (
    <main className="home">
      <div className="home__wrap">
        <Welcome />
        <Presentation />
        <Winner />

        {/* <ListCard cards={appCards?.cards} /> */}
        <Marquee />
        <Newsletter />
      </div>
    </main>
  );
};

export default Home;

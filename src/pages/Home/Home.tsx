import React, { useState, useEffect } from "react";
import Welcome from "../../components/Welcome/Welcome";
import Presentation from "../../components/Presentation/Presentation";
import Winner from "../../components/Winner/Winner";
import ListCard from "../../components/ListCard/ListCard";
import Marquee from "../../components/Marquee/Marquee";
import Newsletter from "../../components/Newsletter/Newsletter";
import OpeningScreen from "../../components/OpeningScreen/OpeningScreen";
import { getVote } from "../../api";
import { IVote } from "../../decl";
import "./Home.css";

interface HomeState {
  vote: IVote | undefined;
}

interface HomeProps {
  auth: boolean;
}

const Home = ({ auth }: HomeProps) => {
  const [appVote, setAppVote] = useState<HomeState["vote"]>();

  const fetchVote = async () => {
    const votePage = await getVote();
    setAppVote({ vote: votePage });
  };

  useEffect(() => {
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

import React from "react";
import Welcome from "../../components/Welcome/Welcome";
import Presentation from "../../components/Presentation/Presentation";
import Winner from "../../components/Winner/Winner";
import ListCard from "../../components/ListCard/ListCard";
import Marquee from "../../components/Marquee/Marquee";
import Newsletter from "../../components/Newsletter/Newsletter";
import OpeningScreen from "../../components/OpeningScreen/OpeningScreen";
import "./Home.css";

interface HomeProps {
  auth: boolean;
}

const Home = ({ auth }: HomeProps) => {
  return (
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
    // <>
    //   {!auth ? (
    //     <OpeningScreen />
    //   ) : (
    //     <main className="home">
    //       <div className="home__wrap">
    //         <Welcome />
    //         <Presentation />
    //         <Winner />
    //         <ListCard />
    //         <Marquee />
    //         <Newsletter />
    //       </div>
    //     </main>
    //   )}
    // </>
  );
};

export default Home;

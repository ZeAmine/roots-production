import React from "react";
import Winner from "../Winner/Winner";
import Cards from "../Cards/Cards";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Winner />
      <Cards />
    </div>
  );
};

export default Home;

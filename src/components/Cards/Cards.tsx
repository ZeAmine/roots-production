import React from "react";
import ListCard from "../ListCard/ListCard";
import "./Cards.css";

const Cards = () => {
  return (
    <section className="section cards">
      <div className="cards__wrap container">
        <div className="section__title">
          <h1>Challengers de la semaine</h1>
        </div>
        <div className="cards__list">
          <div className="cards_list_container">
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;

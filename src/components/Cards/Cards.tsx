import React, { FC, useState } from "react";
import ListCard from "../ListCard/ListCard";
import { ICardItem, ICards } from "../../decl";
import "./Cards.css";

export interface CardsProps {
  cards: ICards | undefined;
}

const Cards = ({ cards }: CardsProps) => {
  return (
    <section className="section cards">
      <div className="cards__wrap container">
        <div className="section__title">
          <h1>{cards?.title}</h1>
        </div>
        {cards?.items.map((card: ICardItem) => {
          <ListCard
            key={card.id}
            id={card.id}
            img={card.img}
            gender={card.gender}
            name={card.name}
          />;
        })}
        {/*<div className="cards__list">*/}
        {/*  <div className="cards_list_container">*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*    <ListCard />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default Cards;
